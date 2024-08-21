**tufts_archivesspace_public_plugin**

**Background of Tufts-Refactored ASpace PUI plugin:**

In 2021 Tufts Archival Research Center, then DCA, brought to Henry Steele in Library Technology Service the possibility of using Yale’s code to achieve infinite scrolling in what we call the finding aid view of the ArchivesSpace PUI.   This was a much better user experience than the jolty way the core PUI displays segments of the finding aid view.    We also saw that the whole UI was much better in terms of organization and visually, and so TARC decided (we checked with Yale for permission) to adopt this approach to our PUI.

In addition to infinite scroll in the finding aid view, there were things like in line requesting, which we use with our version of the Yale Aeon Fulfillment plugin, but was also taken from Yale’s version yale_as_requests, and general adapting the PUI to suit the needs and specific structure of our archives records in terms of labels and metadata from our data that appear in search.

**What our Plugin Does/Features:**

- Create a smooth scrolling experience with inline request to Aeon links in the finding aid view of the resource object
- Branding for Tufts and IA based on Yale’s code
- Customization to labels and contextual search results (“Collection overview”)
- Inclusion of thumbnails in the context of our PUI changes
- Javascript to reorder page elements
- Integration of requesting with our local Aeon Fulfillment plugin, including in line requesting in the finding aid view

**Implementing**

This installs as a normal plugin. Just put this plugin in the plugins directory update the confib.rb file

AppConfig\[:plugins\] = \[‘tufts_archivesspace_public_plugin’

Note that much of the files in the assets folder does contain Tufts branding, so this would need to be reconfigured for other institutions, as well as other things like locales.