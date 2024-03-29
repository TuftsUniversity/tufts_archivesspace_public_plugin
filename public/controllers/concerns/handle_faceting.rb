module HandleFaceting
  extend ActiveSupport::Concern

  # does the fetches when you only want facet information

  def fetch_only_facets(query, facets_array, include_zero)
#    ##Rails.loggerdebug("Finding facets for query '#{query}'")
    criteria = {}
    criteria[:page_size] = 1
    criteria['facet[]'] = facets_array
    criteria['facet.mincount'] = 1 if !include_zero
    data = archivesspace.search(query, 1, criteria) || {}
    faceting = {}
    if !data['facets'].blank? && !data['facets']['facet_fields'].blank?
      faceting = data['facets']['facet_fields']
    end
  end


  # strip out: facets with counts less than input minimum or equal to the total hits, facets of form "ead/ arch*"
  # returns a hash with the text of the facet as the key, count as the value
  def strip_facets(facets_array, min, type, total_hits = nil)
    facets = []
    facets_array.each_slice(2) do |facet_key, facet_count|
      facets << Facet.new(type, facet_key, facet_count)
    end
    facets.reject! { |f| f.count < min || f.count == total_hits }
    facets.sort_by! { |f| f.label } if AppConfig[:pui_display_facets_alpha]
    facets
  end

   # bury the mess!
  def get_pretty_facet_value(k, v)
    pv = strip_mixed_content(v)
    if k == 'primary_type'
      pv = I18n.t("#{v}._singular")
    elsif k == 'langcode'
      # Lookup three-letter language codes
      pv = I18n.t("enumerations.language_iso639_2.#{v}", :default => v)
    elsif k == 'type_enum_s'
      # Lookup container type
      pv = I18n.t("enumerations.container_type.#{v}", :default => v)
    elsif %w(repository used_within_published_repository).include?(k)
      repos = Repository.get_repos
      if repos[v].nil?
        pv = v
      else
        pv = repos[v]['name'] || v
      end
    end
    pv
  end

end
