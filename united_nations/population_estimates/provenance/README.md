This directory contains information about how the `population_estimates` data set was imported into the Universal Data Cube.

Listing of files:

 * The original Excel file: [Total Population - Both Sexes](http://esa.un.org/wpp/Excel-Data/EXCEL_FILES/1_Population/WPP2012_POP_F01_1_TOTAL_POPULATION_BOTH_SEXES.XLS), from the United Nations page [World Population Prospects: The 2012 Revision](http://esa.un.org/wpp/Excel-Data/population.htm).
 * `raw.csv` The part of the original spreadsheet that contains population estimates (from sheet "ESTIMATES"), manually exported using Excel. Chose "format cell", "general" to recover the last three decimal places of precision, which are hidden in the original spreadsheet by a custom cell formatter.
 * `preprocess.js` The Node.js script that transforms `raw.csv` into `../population_estimates.csv`

Note that country codes draw from [UN M.49](http://en.wikipedia.org/wiki/UN_M.49).

By Curran Kelleher 5/2/2014
