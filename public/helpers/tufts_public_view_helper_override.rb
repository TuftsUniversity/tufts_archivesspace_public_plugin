module TuftsPublicViewHelperOverride
  def find_dates_for(result)
    dates = result.json.fetch('dates_of_existence', [])
    dates + result.json['names'].map { |name| name['use_dates'] }.flatten
  end
end