This directory contains information about how the `locations` concordance table was imported into the Universal Data Cube.

Listing of files:

 * The original Excel file: [WPP2012_SA_F01_Locations.XLS](http://esa.un.org/unpd/wpp/SpecialAggregates/EXCEL_FILES/WPP2012_SA_F01_LOCATIONS.XLS), from the United Nations page [World Population Prospects: The 2012 Revision; Special Aggregates DVD-ROM Edition Data files in Excel format (.XLS)](http://esa.un.org/unpd/wpp/SpecialAggregates/DISK_NAVIGATION_EXCEL.HTM).

 * The file `raw.csv` contains the original spreadsheet exported to CSV format using Excel.
 * The script `preprocess.js` transforms `raw.csv` into `../locations.csv`

Note that country codes draw from [UN M.49](http://en.wikipedia.org/wiki/UN_M.49) and [ISO 3166-1 alpha-3](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-3).

By Curran Kelleher 5/3/2014
