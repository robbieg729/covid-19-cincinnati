/**
 * @const {Array<String>} neighborhoodNames - stores the string values of the names of the neighborhoods in Cincinnati.
 */
const neighborhoodNames = ["Avondale", "Bond Hill", "California", "Camp Washington", "Carthage", "CBD", "Clifton", "College Hill", "Colombia Tusculum", "Corryville", "CUF", "East End", "East Price Hill", "East Walnut Hills", "East Westwood", "English Woods", "Evanston", "Fay Apartments", "Hartwell", "Heights", "Hyde Park", "Kennedy Heights", "Linwood", "Lower Price Hill", "Madisonville", "Millvale", "Mount Adams", "Mount Airy", "Mount Auburn", "Mount Lookout", "Mount Washington", "North Avondale", "North Fairmount", "Northside", "Oakley", "O'Bryonville", "Over-the-Rhine", "Paddock Hills", "Pendleton", "Pleasant Ridge", "Queensgate", "Riverside", "Roselawn", "Sayler Park", "Sedamsville", "South Cumminsville", "South Fairmount", "Walnut Hills", "West End", "West Price Hills", "Westwood", "Winton Hills", "Winton Place"];
/**
 * @const {Array<Number>} casesData - stores the number of cases in each neighborhood.
 */
const casesData = [364, 288, 7, 42, 74, 307, 183, 477, 40, 211, 512, 34, 448, 127, 75, 9, 256, 49, 191, 325, 421, 153, 11, 24, 332, 38, 52, 331, 196, 156, 295, 62, 41, 176, 463, 50, 216, 44, 47, 247, 9, 46, 248, 100, 15, 28, 58, 200, 171, 677, 1178, 98, 59];
/**
 * @const {Array<Number>} hospsData - stores the number of hospitalizations in each neighborhood.
 */
const hospsData = [50, 25, 0, 2, 6, 9, 18, 41, 0, 5, 4, 1, 50, 6, 13, 2, 22, 6, 20, 2, 6, 15, 2, 4, 29, 4, 2, 23, 3, 1, 9, 5, 8, 14, 24, 3, 8, 2, 3, 19, 2, 2, 24, 5, 2, 3, 8, 26, 21, 52, 104, 10, 5];
/**
 * @const {Array<Number>} deathsData - stores the number of deaths in each neighborhood.
 */
const deathsData = [6, 1, 0, 0, 0, 2, 8, 8, 0, 0, 3, 0, 2, 2, 5, 1, 3, 0, 6, 0, 0, 1, 0, 0, 9, 0, 0, 0, 1, 0, 2, 0, 2, 2, 7, 0, 1, 0, 0, 8, 0, 0, 3, 2, 0, 0, 3, 7, 3, 12, 25, 0, 0];                                  
/**
 * @const {Array<Number>} recoveredData - stores the number of recovered cases in each neighborhood.
 */
const recoveredData = [203, 136, 1, 10, 41, 90, 80, 247, 19, 120, 311, 16, 290, 52, 47, 4, 123, 25, 100, 208, 207, 76, 5, 14, 143, 19, 26, 193, 93, 79, 131, 39, 23, 85, 203, 26, 98, 19, 27, 126, 3, 26, 116, 53, 10, 13, 24, 93, 89, 350, 626, 60, 30];
/**
 * @const {Array<Array<Number>>} casesBySexData - stores the male and female case numbers in each neighborhood as an array of size 2 (male first, then female).
 */
const casesBySexData = [[167, 197], [125, 163], [3, 4], [27, 15], [37, 37], [204, 103], [88, 95], [182, 295], [18, 22], [120, 91], [251, 250], [19, 15], [215, 233], [50, 77], [34, 41], [3, 6], [110, 146], [12, 37], [79, 112], [168, 168], [184, 237], [76, 77], [5, 6], [11, 13], [137, 195], [7, 31], [29, 23], [132, 199], [98, 98], [71, 85], [135, 160], [35, 27], [15, 26], [81, 95], [233, 230], [21, 29], [105, 111], [16, 28], [26, 21], [115, 132], [9, 0], [20, 26], [115, 133], [50, 50], [6, 9], [16, 12], [24, 34], [90, 110], [62, 109], [309, 368], [507, 671], [33, 65], [23, 36]];
/**
 * @const {Array<Array<Number>>} casesByAgeData - stores the number of cases by age group in each neighborhood, in ascending order of age. The age groups are 0-9, 10-19, 20-29, 30-39
 * and so on, with the last age group being 90+. The data for each neighborhood is stored in an array of size 10.
 */
const casesByAgeData = [
    [12, 25, 80, 56, 44, 62, 49, 27, 6, 3],
    [9, 23, 53, 47, 38, 36, 57, 20, 4, 1],
    [0, 2, 0, 0, 0, 0, 4, 1, 0, 0],
    [1, 0, 8, 16, 8, 5, 3, 1, 0, 0],
    [6, 5, 10, 15, 17, 8, 9, 2, 2, 0],
    [4, 8, 146, 76, 23, 27, 16, 5, 1, 1],
    [2, 19, 68, 23, 11, 16, 18, 16, 8, 2],
    [11, 34, 85, 88, 60, 89, 52, 18, 20, 20],
    [1, 2, 18, 9, 3, 3, 4, 0, 0, 0],
    [0, 54, 132, 7, 8, 2, 5, 3, 0, 0],
    [2, 164, 317, 12, 2, 5, 3, 5, 2, 0],
    [0, 2, 14, 6, 1, 4, 3, 2, 2, 0],
    [17, 38, 93, 113, 80, 60, 35, 8, 4, 0],
    [1, 7, 32, 20, 17, 15, 7, 8, 13, 5],
    [10, 4, 12, 8, 8, 11, 13, 7, 2, 0],
    [3, 1, 0, 3, 0, 0, 2, 0, 0, 0],
    [6, 55, 70, 45, 24, 30, 17, 5, 2, 2],
    [3, 4, 22, 10, 3, 2, 3, 2, 0, 0],
    [3, 12, 38, 39, 33, 13, 16, 13, 13, 11],
    [0, 105, 188, 15, 6, 5, 1, 2, 3, 0],
    [9, 50, 155, 67, 29, 56, 28, 14, 12, 1],
    [2, 13, 31, 37, 22, 25, 11, 9, 0, 3],
    [0, 0, 2, 3, 4, 1, 2, 0, 0, 0],
    [1, 1, 4, 10, 4, 3, 1, 0, 0, 0],
    [7, 20, 89, 71, 37, 34, 28, 12, 15, 17],
    [3, 1, 12, 12, 2, 3, 4, 0, 1, 0],
    [0, 0, 28, 5, 5, 5, 4, 2, 2, 1],
    [19, 37, 78, 58, 48, 49, 34, 6, 1, 0],
    [5, 29, 79, 44, 20, 6, 9, 1, 2, 1],
    [4, 24, 41, 24, 18, 27, 15, 2, 0, 0],
    [6, 25, 70, 65, 49, 32, 31, 12, 2, 1],
    [3, 7, 19, 5, 10, 6, 5, 6, 1, 0],
    [0, 8, 4, 11, 11, 4, 1, 2, 0, 0],
    [5, 6, 43, 51, 20, 22, 17, 8, 4, 0],
    [8, 11, 232, 98, 27, 39, 24, 12, 10, 1],
    [3, 21, 10, 7, 3, 2, 2, 2, 0, 0],
    [5, 12, 81, 70, 13, 22, 10, 3, 0, 0],
    [2, 6, 12, 7, 4, 7, 5, 1, 0, 0],
    [1, 1, 27, 9, 5, 4, 0, 0, 0, 0],
    [5, 17, 61, 31, 32, 40, 27, 16, 13, 5],
    [0, 0, 0, 1, 1, 4, 3, 0, 0, 0],
    [2, 1, 9, 9, 8, 5, 11, 1, 0, 0],
    [7, 24, 43, 38, 28, 30, 48, 18, 9, 3],
    [5, 7, 18, 18, 10, 22, 16, 3, 1, 0],
    [0, 2, 3, 5, 0, 0, 5, 0, 0, 0],
    [0, 4, 3, 3, 4, 5, 3, 4, 2, 0],
    [0, 0, 7, 10, 14, 10, 9, 7, 1, 0],
    [2, 10, 47, 52, 25, 18, 27, 12, 7, 0],
    [5, 14, 50, 38, 13, 19, 18, 8, 2, 1],
    [28, 69, 121, 140, 92, 106, 58, 48, 13, 1],
    [39, 110, 249, 221, 157, 155, 109, 59, 49, 29],
    [5, 10, 30, 23, 5, 14, 7, 3, 1, 0],
    [1, 8, 14, 11, 10, 11, 2, 1, 1, 0]
];
/**
 * @const {Array<Array<Number>>} caseTrendData - stores the total number of cases in each neighborhood at the end of each month for March-November 2020. The data for each neighborhood
 * is stored in an array of size 9.
 */
const caseTrendData = [
    [2, 23, 83, 136, 192, 227, 284, 304, 343],
    [2, 17, 64, 92, 140, 199, 223, 257, 288],
    [0, 1, 3, 3, 3, 5, 5, 7, 7],
    [0, 0, 12, 20, 25, 31, 37, 40, 42],
    [3, 3, 14, 23, 37, 51, 61, 70, 74],
    [2, 20, 72, 133, 181, 217, 254, 280, 307],
    [2, 15, 29, 47, 76, 100, 112, 149, 183],
    [2, 12, 77, 141, 203, 269, 312, 374, 477],
    [0, 7, 10, 16, 20, 22, 28, 33, 40],
    [1, 11, 23, 37, 78, 102, 125, 150, 211],
    [3, 31, 69, 103, 167, 230, 292, 364, 512],
    [1, 5, 12, 16, 22, 25, 28, 30, 34],
    [2, 48, 83, 110, 156, 219, 277, 333, 448],
    [0, 12, 21, 33, 54, 78, 101, 112, 127],
    [0, 3, 10, 22, 39, 51, 60, 69, 75],
    [0, 0, 2, 2, 5, 6, 8, 8, 9],
    [2, 19, 44, 81, 103, 123, 158, 197, 256],
    [0, 5, 10, 13, 20, 26, 31, 38, 49],
    [1, 11, 27, 44, 62, 100, 123, 148, 191],
    [3, 24, 68, 112, 173, 222, 257, 299, 325],
    [3, 50, 113, 189, 264, 300, 331, 369, 421],
    [2, 9, 43, 60, 85, 104, 119, 130, 153],
    [0, 1, 3, 4, 4, 7, 7, 9, 11],
    [1, 4, 8, 10, 13, 16, 18, 20, 24],
    [2, 37, 81, 105, 144, 192, 230, 270, 332],
    [0, 6, 10, 15, 22, 28, 33, 35, 38],
    [0, 9, 14, 19, 25, 30, 34, 40, 52],
    [2, 20, 51, 83, 131, 174, 221, 268, 331],
    [1, 11, 25, 54, 82, 111, 130, 150, 196],
    [1, 9, 17, 31, 48, 69, 93, 110, 156],
    [3, 21, 40, 63, 92, 134, 172, 220, 295],
    [0, 2, 8, 17, 28, 33, 40, 49, 62],
    [0, 0, 6, 9, 14, 20, 25, 33, 41],
    [2, 11, 27, 40, 67, 98, 120, 147, 176],
    [7, 31, 66, 100, 171, 236, 297, 380, 463],
    [0, 1, 3, 8, 14, 20, 26, 38, 50],
    [4, 16, 23, 46, 74, 112, 137, 180, 216],
    [1, 2, 5, 9, 14, 20, 24, 31, 44],
    [0, 0, 3, 7, 12, 18, 22, 32, 47],
    [3, 9, 20, 47, 78, 123, 157, 200, 247],
    [0, 0, 0, 1, 1, 1, 3, 3, 9],
    [1, 1, 4, 9, 15, 20, 26, 35, 46],
    [3, 7, 21, 53, 92, 133, 180, 212, 248],
    [0, 2, 8, 16, 25, 37, 49, 74, 100],
    [1, 1, 1, 3, 3, 3, 6, 9, 15],
    [0, 1, 4, 6, 10, 13, 18, 23, 28],
    [1, 3, 5, 11, 18, 26, 32, 40, 58],
    [1, 10, 23, 37, 62, 90, 119, 158, 200],
    [0, 3, 17, 40, 52, 69, 93, 137, 171],
    [10, 33, 64, 100, 159, 241, 332, 490, 677],
    [30, 91, 167, 252, 363, 499, 651, 842, 1178],
    [2, 4, 9, 20, 32, 45, 59, 78, 98],
    [0, 3, 5, 10, 18, 25, 30, 42, 59]
]; 

/**
 * @const {Array<String>} hospitalNames - stores the names of hospitals in Cincinnati.
 */
const hospitalNames = ["University of Cincinnati Medical Center", "Good Samaritan Hospital", "The Christ Hospital", "UC Health Holmes Hospital", "Queen Place Medical Center"];
/**
 * @const {Array<String>} hospitalAddress - stores the addresses of hospitals in Cincinnati.
 */
const hospitalAddresses = ["3200 Burnet Ave, Cincinnati, OH 45229", "375 Dixmyth Ave, Cincinnati, OH 45220", "2139 Auburn Ave, Cincinnati, OH 45219", "200 Albert Sabin Way, Cincinnati, OH 45220", "3131 Queen Place Ave, Cincinnati, OH 45238"];
/**
 * @const {Array<String>} hospitalHours - stores the opening and closing times of hospitals in Cincinnati.
 */
const hospitalHours = ["24 hours", "24 hours", "24 hours", "24 hours", "24 hours"];
/**
 * @const {Array<String>} hospitalPhones - stores the phone numbers of hospitals in Cincinnati.
 */
const hospitalPhones = ["+1 513-475-8000", "+1 513-862-1400", "+1 513-585-2000", "+1 513-475-8000", "+1 513-215-9290"];
/**
 * @const {Array<String>} hospitalRatings - stores the Google ratings of hospitals in Cincinnati.
 */
const hospitalRatings = ["3.9/5", "3.3/5", "3.4/5", "3.2/5", "4.1/5"];
/**
 * @const {Array<String>} hospitalWebsites - stores the website links of hospitals in Cincinnati.
 */
const hospitalWebsites = ["https://www.uchealth.com/", "https://www.trihealth.com/hospitals-and-practices/good-samaritan-hospital/?utm_medium=organic&utm_source=google_business&utm_campaign=cincinnati&utm_content=good_samaritan_hospital", "https://www.thechristhospital.com/locations/locations-hospital", "https://www.uchealth.com/locations/uc-health-holmes-hospital/", "https://www.mercy.com/locations/medical-centers-clinics/cincinnati/mercy-health-queen-Place-medical-center?utm_source=local-listings&utm_medium=organic&utm_content=website_link"];

/**
 * @const {Array<String>} testingSiteNames - stores the names of Covid-19 testing sites in Cincinnati.
 */
const testingSiteNames = ["TriHealth Priority Care Glenway", "The Little Clinic", "CareFirst Urgent Care", "Midtown Urgent Care", "Drive-Thru at Walgreens", "Cincinnati VA Hospital"];
/**
 * @const {Array<String>} testingSiteAddresses - stores the addresses of Covid-19 testing sites in Cincinnati.
 */
const testingSiteAddresses = ["6139 Glenway Ave, Cincinnati, OH 45211", "6165 Glenway Ave, Cincinnati, OH 45211", "5505 Harrison Ave, Cincinnati, OH 45248", "5002 Ridge Ave, Cincinnati, OH 45209", "3 W Corry St, Cincinnati, OH 45219", "3200 Vine St, Cincinnati, OH 45220"];
/**
 * @const {Array<String>} testingSiteHours - stores the opening and closing times of Covid-19 testing sites in Cincinnati.
 */
const testingSiteHours = ["8am-7:30pm", "8:30am-7:30pm", "8am-8pm", "10am-8pm", "9am-5pm", "24 hours"];
/**
 * @const {Array<String>} testingSiteAppointments - stores 'Yes' or 'No' for each Covid-19 testing site in Cincinnati, depending on whether or not a Covid-19 test must be booked 
 * at given testing site.
 */
const testingSiteAppointments = ["Yes", "Yes", "No", "No", "Yes", "Yes"];
/**
 * @const {Array<String>} testingSitePhones - stores the phone numbers of Covid-19 testing sites in Cincinnati.
 */
const testingSitePhones = ["+1 513-346-3399", "+1 513-389-7407", "+1 513-832-0980", "+1 513-223-5444", "+1 800-925-4733", "+1 513-861-3100"];
/**
 * @const {Array<String>} testingSiteRatings - stores the Google ratings of Covid-19 testing sites in Cincinnati.
 */
const testingSiteRatings = ["4.0/5", "3.6/5", "4.0/5", "4.7/5", "3.9/5", "4.0/5"];
/**
 * @const {Array<String>} testingSiteWebsites - stores the website links of Covid-19 testing sites in Cincinnati.
 */
const testingSiteWebsites = ["http://www.trihealth.com/hospitals-and-practices/trihealth-priority-care-glenway/", "https://www.thelittleclinic.com/clinic-details/854/00321?cid=loc_85400321tlc_gmb", "https://carefirsturgentcares.com/", "https://www.midtownurgentcarecincinnati.com/", "https://www.walgreens.com/findcare/covid19/testing?group=b&", "https://www.cincinnati.va.gov/"];

/**
 * @const {Array<String>} storeNames - stores the names of stores in Cincinnati.
 */
const storeNames = ["Target", "Target", "Target", "Target", "Walmart Supercenter", "Walmart Supercenter", "Walmart Supercenter", "Walmart Supercenter"];
/**
 * @const {Array<String>} storeAddresses - stores the addresses of stores in Cincinnati.
 */
const storeAddresses = ["6150 Glenway Ave, Cincinnati, OH 45211", "235 Calhoun St, Cincinnati, OH 45219", "3245 Geier Dr, Cincinnati, OH 45209", "160 Pavilion Pkwy, Newport, KY 41071", "4000 Red Bank Rd, Cincinnati, OH 45227", "2322 Ferguson Rd, Cincinnati, OH 45238", "8451 Colerain Ave, Cincinnati, OH 45239", "2801 Cunningham Dr, Cincinnati, OH 45241"];
/**
 * @const {Array<String>} storeHours - stores the opening and closing times of stores in Cincinnati.
 */
const storeHours = ["8am-10pm", "8am-10pm", "8am-10pm", "8am-10pm", "7am-11pm", "7am-11pm", "7am-11pm", "7am-10pm"];
/**
 * @const {Array<String>} storeHealthAndSafety - stores the Covid-19 health and safety requirements of stores in Cincinnati.
 */
const storeHealthAndSafety = ["Mask required, staff disinfect surfaces, safety dividers at checkout", "Mask required, safety dividers at checkout", "Mask required, staff disinfect surfaces, safety dividers at checkout", "Mask required, staff disinfect surfaces, safety dividers at checkout", "Mask required, safety dividers at checkout", "Mask required, staff disinfect surfaces, safety dividers at checkout", "Mask required, staff disinfect surfaces, safety dividers at checkout", "Mask required, staff disinfect surfaces, safety dividers at checkout"];
/**
 * @const {Array<String>} storePhones - stores the phone numbers of stores in Cincinnati.
 */
const storePhones = ["+1 513-719-1076", "+1 513-698-8161", "+1 513-631-5690", "+1 859-814-0140", "+1 513-351-9818", "+1 513-922-8881", "+1 513-245-9458", "+1 513-769-1124"];
/**
 * @const {Array<String>} storeRatings - stores the Google ratings of stores in Cincinnati.
 */
const storeRatings = ["4.0/5", "4.1/5", "4.2/5", "4.3/5", "3.7/5", "3.6/5", "3.7/5", "3.6/5"];
/**
 * @const {Array<String>} storeWebsites - stores the website links of stores in Cincinnati.
 */
const storeWebsites = ["https://www.target.com/sl/western-hills/2488", "https://www.target.com/sl/uc-calhoun-st/3254", "https://www.target.com/sl/cincinnati-central/1447", "https://www.target.com/sl/newport/2483", "https://www.walmart.com/store/2250-cincinnati-oh", "https://www.walmart.com/store/2447-cincinnati-oh", "https://www.walmart.com/store/1521-cincinnati-oh", "https://www.walmart.com/store/3749-cincinnati-oh"];

/**
 * @const {Array<String>} barNames - stores the names of bars in Cincinnati.
 */
const barNames = ["JerZees Pub and Grub", "Sundry and Vice", "The Lackman", "O'Malleys In the Alley", "Knockbat Nats"];
/**
 * @const {Array<String>} barAddresses - stores the addresses of bars in Cincinnati.
 */
const barAddresses = ["708 Monmouth St, Newport, KY 41071", "18 W 13th St, Cincinnati, OH 45202", "1237 Vine St, Cincinnati, OH 45202", "25 W Ogden Pl, Cincinnati, OH 45202", "10 W 7th St, Cincinnati, OH 45202"];
/**
 * @const {Array<String>} barHours - stores the opening and closing times of bars in Cincinnati.
 */
const barHours = ["11am-2am", "4pm-11pm", "3pm-10pm", "11am-9:30pm", "2pm-10pm"];
/**
 * @const {Array<String>} barHealthAndSafety - stores the Covid-19 health and safety requirements of bars in Cincinnati.
 */
const barHealthAndSafety = ["Mask required, staff disinfect surfaces, tables distanced", "Mask required, staff disinfect surfaces", "Mask required, staff disinfect surfaces, tables distanced, no bar service", "Mask required, staff disinfect surfaces", "Mask required, staff disinfect surfaces"];
/**
 * @const {Array<String>} barPhones - stores the phone numbers of bars in Cincinnati.
 */
const barPhones = ["+1 859-491-3500", "+1 513-721-8423", "+1 513-381-0741", "+1 513-381-3114", "+1 513-621-1000"];
/**
 * @const {Array<String>} barRatings - stores the Google ratings of bars in Cincinnati.
 */
const barRatings = ["4.4/5", "4.7/5", "4.5/5", "4.3/5", "4.5/5"];
/**
 * @const {Array<String>} barWebsites - stores the website links of bars in Cincinnati.
 */
const barWebsites = ["https://www.jerzeespub.com/", "https://www.sundryandvice.com/", "https://www.lackmanbar.com/", "https://omalleyscincy.com/", "https://www.facebook.com/Knockback-Nats-Neighborhood-Bar-146296676362/"];

/** Class representing a place that is being affected by Covid-19. */
class Place{
    /**
     * Create a place
     * @param {String} name - the name.
     * @param {Number} cases - the total number of cases.
     * @param {Number} hosp - the total number of hospitalizations.
     * @param {Number} deaths - the total number of deaths.
     * @param {Number} recovered - the total number of recovered cases.
     * @param {Array} casesBySex - the total number of male cases and female cases.
     * @param {Array} casesByAge - the total number of cases in different age groups.
     * @param {Array} caseTrendData - the total number of cases at the end of each month.   
     */
    constructor(name, cases, hosp, deaths, recovered, casesBySex, casesByAge, caseTrendData){
        this.name = name;
        this.cases = cases;
        this.hosp = hosp;
        this.deaths = deaths;
        this.recovered = recovered;
        this.casesBySex = casesBySex;
        this.casesByAge = casesByAge;
        this.caseTrendData = caseTrendData;
    }
    /**
     * Displays all the Covid-19 data for the place on the index page.
     */
    DisplayData(){                   
        const levelsDataDisplayer = document.getElementById("levelsDataDisplay");
        if (this.name != "Cincinnati"){
            document.getElementById("dataTitle").innerHTML = this.name;                
            if (this.cases >= 500){
                levelsDataDisplayer.style.color = "#FF0000";
                levelsDataDisplayer.innerHTML = "High";
            }
            else if (this.cases < 500 && this.cases >= 250){
                levelsDataDisplayer.style.color = "#FFA500";
                levelsDataDisplayer.innerHTML = "Medium";
            } 
            else{
                levelsDataDisplayer.style.color = "#32CD32";
                levelsDataDisplayer.innerHTML = "Low";
            }
        }
        else{
            document.getElementById("dataTitle").innerHTML = "Total"
            levelsDataDisplayer.innerHTML = "";
        } 
        d3.select("body")
        .selectAll(".data")
        .data([this.cases, this.hosp, this.deaths, this.recovered])
        .text(function (data) {
            return FormatNumberForText(data);
        });
        const percentage = ((100 * this.casesBySex[1]) / (this.casesBySex[0] + this.casesBySex[1])).toString();
        const circumference = (2 * 25 * Math.PI).toString();
        document.getElementById("overlapCircle").style.strokeDasharray = "calc(" + percentage + " * " + circumference + " / 100) " + circumference;
        document.getElementById("maleCasesText").innerHTML = "Males: " + FormatNumberForText(this.casesBySex[0]);
        document.getElementById("femaleCasesText").innerHTML = "Females: " + FormatNumberForText(this.casesBySex[1]);
        let highestNum = Max(this.casesByAge);
        var barHeight = 0;                    
        for (let i = 0; i < 10; i++) {
            var currentBar = document.getElementById("bar" + (i + 1).toString());
            var currentBarNum = document.getElementById("barNum" + (i + 1).toString());
            if (this.casesByAge[i] != highestNum){
                barHeight = this.casesByAge[i] * (80 / highestNum);  
            }
            else {
                barHeight = 80;
            }
            currentBar.setAttribute("height", (barHeight).toString());
            currentBarNum.innerHTML = FormatNumberForText(this.casesByAge[i]);                
            var barYCoord = 100 - barHeight;
            currentBar.setAttribute("y", (barYCoord).toString());
            currentBarNum.setAttribute("y", (barYCoord - 5).toString());
            if (this.casesByAge[i] >= 1000){
                currentBarNum.setAttribute("x", (parseInt(currentBar.getAttribute("x")) - 7.5).toString())
            }
            else if (this.casesByAge[i] >= 100 && this.casesByAge[i] < 1000){
                currentBarNum.setAttribute("x", (parseInt(currentBar.getAttribute("x")) - 2.5).toString())
            }
            else if (this.casesByAge[i] >= 10 && this.casesByAge[i] < 100){
                currentBarNum.setAttribute("x", currentBar.getAttribute("x"))
            }
            else{
                currentBarNum.setAttribute("x", (parseInt(currentBar.getAttribute("x")) + 5).toString())
            }
        }
        for (let i = 1; i <= 5; i++) {
            document.getElementById("lineNum" + i.toString()).innerHTML = FormatNumberForText(Math.ceil(this.caseTrendData[8] * (i / 5)));                    
        }
        var lineYCoords = new Array(8);
        const multiplier = 90 / this.caseTrendData[8];
        for (let i = 0; i < lineYCoords.length; i++) {
            lineYCoords[i] = 100 - this.caseTrendData[i] * multiplier;
        }
        document.getElementById("lineGraph").setAttribute("points", 
        "40, " + lineYCoords[0].toString() + " 77.5, " + lineYCoords[1].toString() + " 115, " + lineYCoords[2].toString() + " 152.5, " + lineYCoords[3].toString() + " 190, " + lineYCoords[4].toString() + " 227.5, " + lineYCoords[5].toString() + " 265, " + lineYCoords[6].toString() + " 302.5, " + lineYCoords[7].toString() + " 340, 10");        
    }                
}
/**Class representing a hospital, whose information is displayed in a popover. */
class Hospital{
    /**
     * @param {String} name - the name. 
     * @param {String} address - the address.
     * @param {String} hours - the opening and closing times.
     * @param {String} phone - the phone number.
     * @param {String} googleRating - the rating, taken from Google. 
     * @param {String} website - the hyperlink to the website.
     */
    constructor(name, address, hours, phone, googleRating, website){
        this.name = name;
        this.address = address;
        this.hours = hours;
        this.phone = phone;
        this.googleRating = googleRating;
        this.website = website;
    }
    /** 
     * @return {String} Returns the HTML code for the title of the popover by inserting the name property of the object into a HTML h5 tag.
     */
    ReturnPopoverTitleHtml(){
        return "<h5>" + this.name + "</h5>"
    }
    /**
     * @return {String} Returns the HTML code for the content of the popover by looping through the properties of the object and addign HTML code for each one.
     */
    ReturnPopoverContentHtml(){
        var str = "";
        for (var property in this){
            if (property.toString() != "name"){
                if (property.toString() != "website"){
                    str += "<p><strong>" + MakeWordFromPropertyName(property) + "</strong>: " + this[property] + "</p> ";
                }              
            }              
        }
        str += "<a href=\"" + this.website + "\" target=\"_blank\"><strong>Go to website</strong></a>";  
        return str;
    }
}
/**
 * Class representing a Covid-19 testing site, whose information is displayed in a popover.
 * @extends Hospital
 */
class TestingSite extends Hospital{
    /** 
     * @param {String} name - the name. 
     * @param {String} address - the address.
     * @param {String} hours - the opening and closing times.
     * @param {String} appointment - 'yes' or 'no' depending on if the site requires an appointment to be made.
     * @param {String} phone - the phone number.
     * @param {String} googleRating - the rating, taken from Google. 
     * @param {String} website - the hyperlink to the website.
     */
    constructor(name, address, hours, appointment, phone, googleRating, website){        
        super(name, address, hours, phone, googleRating, website);
        this.appointment = appointment;        
    }
}
/**
 * Class representing a store, whose information is displayed in a popover.
 * @extends Hospital
 */
class Store extends Hospital{
    /** 
     * @param {String} name - the name. 
     * @param {String} address - the address.
     * @param {String} hours - the opening and closing times.
     * @param {String} healthAndSafety - the Covid-19 health and safety requirements inside the store.
     * @param {String} phone - the phone number.
     * @param {String} googleRating - the rating, taken from Google. 
     * @param {String} website - the hyperlink to the website.
     */
    constructor(name, address, hours, healthAndSafety, phone, googleRating, website){
        super(name, address, hours, phone, googleRating, website);
        this.healthAndSafety = healthAndSafety;
    }
}
/**
 * @const {Place} cincinnati - stores the name and Covid-19 data of the city of Cincinnati.
 */
const cincinnati = new Place("Cincinnati", 13922, 799, 140, 5422, [6405, 7517], [369, 1425, 4097, 2505, 1581, 1646, 1227, 579, 314, 152], [107, 675, 1627, 2658, 3988, 5350, 6605, 7779, 13922]);
/**
 * @name neighborhoods
 * @type {Array<Place>}
 * @description - stores all of the neighborhoods in Cincinnati, and their Covid-19 information, corresponding to the Covid-19 data arrays.
 */
var neighborhoods = new Array(neighborhoodNames.length);
for (let i = 0; i < neighborhoods.length; i++) {
    neighborhoods[i] = new Place(neighborhoodNames[i], casesData[i], hospsData[i], deathsData[i], recoveredData[i], casesBySexData[i], casesByAgeData[i], caseTrendData[i]);        
}
/**
 * @const {Array<Element>} imageMapAreas - stores the HTML area elements in the index page, so that an event listener, which will display the data of the corresponding
 * neighborhood, can be added to each one.
 */
const imageMapAreas = document.querySelectorAll("area");
for (let i = 0; i < imageMapAreas.length; i++) {
    imageMapAreas[i].addEventListener("click", function(){neighborhoods[i].DisplayData();});    
}
/**
 * @name hospitals
 * @type {Array<Hospital>}
 * @description - stores all of the hospitals and their information, corresponding to the hospital data arrays.
 */
var hospitals = new Array(hospitalNames.length);
for (let i = 0; i < hospitals.length; i++) {
    hospitals[i] = new Hospital(hospitalNames[i], hospitalAddresses[i], hospitalHours[i], hospitalPhones[i], hospitalRatings[i], hospitalWebsites[i]);    
}
SetObjectPopovers(".hospital-circle", hospitals);
/**
 * @name testingSites
 * @type {Array<TestingSite>}
 * @description - stores all of the testing sites and their information, corresponding to the testing site data arrays.
 */
var testingSites = new Array(testingSiteNames.length);
for (let i = 0; i < testingSites.length; i++) {
    testingSites[i] = new TestingSite(testingSiteNames[i], testingSiteAddresses[i], testingSiteHours[i], testingSiteAppointments[i], testingSitePhones[i], testingSiteRatings[i], testingSiteWebsites[i]);
}
SetObjectPopovers(".testing-site-circle", testingSites);
/**
 * @name stores
 * @type {Array<Store>}
 * @description - stores all of the stores and their information, corresponding to the store data arrays.
 */
var stores = new Array(storeNames.length);
for (let i = 0; i < stores.length; i++) {
    stores[i] = new Store(storeNames[i], storeAddresses[i], storeHours[i], storeHealthAndSafety[i], storePhones[i], storeRatings[i], storeWebsites[i]);   
}
SetObjectPopovers(".store-circle", stores);
/**
 * @name bars
 * @type {Array<Store>}
 * @description - stores all of the bars and their information, corresponding to the bar data arrays.
 */
var bars = new Array(barNames.length);
for (let i = 0; i < stores.length; i++) {
    bars[i] = new Store(barNames[i], barAddresses[i], barHours[i], barHealthAndSafety[i], barPhones[i], barRatings[i], barWebsites[i]);   
}
SetObjectPopovers(".bar-circle", bars);
/**
 * @const {Element} totalBtn - represents the HTML button element whose id='totalBtn', shown on the index.html page as a button whose inner text is 'Total'.
 * When clicked, it displays the data for the whole of Cincinnati.
 */
const totalBtn = document.getElementById("totalBtn")
totalBtn.addEventListener("click", function(){cincinnati.DisplayData();});
/**
 * @const {Array<Element>} mapCircles - stores all the CSS class .map-circle elements, so that various event listeners can be added to each one.
 */
const mapCircles = document.querySelectorAll(".map-circle");
mapCircles.forEach(circle => {    
    circle.setAttribute("r", "5");
    circle.addEventListener("mouseover", function(){
        circle.setAttribute("r", "7.5");
    });
    circle.addEventListener("mouseout", function(){
        circle.setAttribute("r", "5");
    });
});
/**
 * @const {Element} showServicesBtn1 - represents the HTML button element whose id='showServicesBtn1', shown on the index.html page as a button whose inner text is 
 * 'Show'. When clicked, it will read the 'checked' property of all the checkboxes, and subsequently show the HTML elements that are linked to the 'checked' checkboxes.
 */
const showServicesBtn1 = document.getElementById("showServicesBtn1");
/**
 * @const {Array<Element>} checkboxes - stores all the CSS class .form-check-input elements, which represent the checkboxes on the index.html page. 
 */
const checkboxes = document.querySelectorAll(".form-check-input");
showServicesBtn1.addEventListener("click", function(){  
    SetCheckboxElementsVisibility(checkboxes[0], document.querySelectorAll(".hospital-circle"));
    SetCheckboxElementsVisibility(checkboxes[1], document.querySelectorAll(".testing-site-circle"));
    SetCheckboxElementsVisibility(checkboxes[2], document.querySelectorAll(".store-circle"));
    SetCheckboxElementsVisibility(checkboxes[3], document.querySelectorAll(".bar-circle"));
});
/**
 * @const {Element} showServicesBtn2 - represents the HTML button element whose id='showServicesBtn2', shown on the index.html page as a button whose inner text is
 * 'Show services'. An event listener is added so that, when clicked, it will toggle the visibility of the form and SVG area over the image map, and subsequently
 * display the popover buttons corresponding to each hospital, testing site, store, and bar.
 */
const showServicesBtn2 = document.getElementById("showServicesBtn2");
showServicesBtn2.addEventListener("click", function(){
    if (this.innerHTML == "Show services"){       
        this.innerHTML = "Hide services";
        mapCircles.forEach(circle =>{
            circle.style.visibility = "visible";
        });
        checkboxes.forEach(checkbox =>{
            checkbox.checked = true;
        });        
    }
    else{     
        this.innerHTML = "Show services";
        mapCircles.forEach(circle =>{
            circle.style.visibility = "hidden";
        });
    }
    ToggleVisibility(document.getElementById("form1"));
    ToggleVisibility(document.getElementById("mapSvg"));    
});
/**
 * @const {Element} br - represents the HTML line break element whose id='bottomBr'. Necessary so that when the advanced data SVG area is hidden, there is no double
 * line break at the bottom of the page.
 */
const br = document.getElementById("bottomBr");
br.style.display = "none";
/**
 * @const {Element} advancedDataBtn - represents the HTML button element whose id='advancedDataBtn'. Has a 'click' event listener so that when the button is clicked,
 * it displays the collapsible SVG area containing the advanced data.
 */
const advancedDataBtn = document.getElementById("advancedDataBtn");
advancedDataBtn.addEventListener("click", function(){
    if (this.innerHTML == "Show advanced data"){
        this.innerHTML = "Hide advanced data";
        br.style.display = "initial";
    }
    else{
        this.innerHTML = "Show advanced data";
        br.style.display = "none";
    }
});
/**
 * @name DOMContentLoaded
 * @type {Function}
 * @description - initalizes the popovers on the index.html page. Code taken from Bootstrap.
 */
document.addEventListener("DOMContentLoaded", function(){
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    const popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });
});
/**
 * 
 * Function which turns the name of an object property into an actual word. Needed for the {@link ReturnPopoverContentHtml} function in the {@link Hospital} class.
 * @param {Property} property - the property that needs to be turned into an actual word. 
 */
function MakeWordFromPropertyName(property){
    var propertyStr = property.toString();
    var isMoreThanOneWord = false;
    for (let i = 0; i < propertyStr.length; i++) {
        if (propertyStr.charCodeAt(i) >= 65 && propertyStr.charCodeAt(i) <= 90){
            isMoreThanOneWord = true;
            break;
        }
    }
    if (isMoreThanOneWord){
        var str = "";
        for (let i = 0; i < propertyStr.length; i++) {
            if (propertyStr.charCodeAt(i) >= 65 && propertyStr.charCodeAt(i) <= 90){
                str += " " + propertyStr[i].toLowerCase();
            }
            else if (i == 0){
                str += propertyStr[i].toUpperCase();
            }            
            else{
                str += propertyStr[i];
            }
        }
        return str;
    }
    else{
        return propertyStr[0].toUpperCase() + propertyStr.substr(1);
    }
}

/**
 * 
 * Adds content to the HTML popovers specified by the parameters of the function. Does so by calling the {@link ReturnPopoverContentHtml} and {@link ReturnPopoverTitleHtml}
 * functions on each object in the called array.
 * @param {String} className - the CSS class name of the required popovers.
 * @param {Array<Object>} objectArray - the array storing the objects whose content is to be displayed on the required HTML popovers.
 */
function SetObjectPopovers(className, objectArray){
    const popovers = document.querySelectorAll(className);
    for (let i = 0; i < popovers.length; i++) {
        popovers[i].setAttribute("data-bs-content", objectArray[i].ReturnPopoverContentHtml());
        popovers[i].setAttribute("title", objectArray[i].ReturnPopoverTitleHtml());
    }
}

/**
 * 
 * Either hides or shows the corresponding HTML elements of a HTML checkbox, depending on whether or not that HTML checkbox is checked. Does so by calling the {@link ToggleVisibility} function
 * for each element.
 * @param {Element} checkbox - the HTML checkbox whose corresponding HTML elements are called in the other parameter.
 * @param {Array<Element>} elements - an array of the corresponding HTML elements to the HTML checkbox.
 */
function SetCheckboxElementsVisibility(checkbox, elements){
    elements.forEach(element => {
        element.style.visibility = "hidden";
    });
    if (checkbox.checked == true){
        elements.forEach(element => {
            ToggleVisibility(element);
        });
    }
}

/** 
 * Toggles the visibility of a called HTML element.
 * @param {Element} element - the element whose visibility will be toggled. 
 */
function ToggleVisibility(element){
    if (element.style.visibility == "visible"){
        element.style.visibility = "hidden";
    }
    else{
        element.style.visibility = "visible";
    }
}

/**
 * Returns the maximum number of a called array.
 * @param {Array<Number>} arr - the array whose maximum value is to be returned.
 */
function Max(arr){
    var max = 0;
    for (let i = 0; i < arr.length; i++){   
            if (arr[i] > max){
                max = arr[i];
            }    
    }
    return max;
}

/**
 * Returns a number in text format. E.g., if 13290 was the input to this function, the return value would be 13,290.
 * @param {Number} num - the number to be formatted.
 */
function FormatNumberForText(num){
    if (num < 1000){
        return num.toString();
    }
    else{
        const indexForComma = num.toString().length - 3;
        return num.toString().substr(0, indexForComma) + "," + num.toString().substr(indexForComma);
    }
}