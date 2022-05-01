# Spotty (by Vonia)

[Spotty (Spot-a-Potty)](https://lisicase.github.io/vonia/) is a mobile-first web application to help people on the go find public restrooms that fit their needs so that they can save time and have better peace of mind.

This app shows nearby public restrooms and allows for crowdsourced reviews of the bathrooms. Users will thus be able to find locations in advance as well as review crowdsourced ratings and other information provided to evaluate whether the restroom lives up to their own cleanliness standard and/or has any preferred features prior to visiting the location.

## Contributions

### Original Authors

Vonia (Lisi Case, Kevin Chou, David Chiang, and Jacqueline Park) are a group Informatics students at the University of Washington in Seattle working on a final capstone project in Winter/Spring 2022. We will no longer be maintaining this website after graduation, starting July 2022.

### Community Contributions

If you would like to contribute, you are welcome to fork our project and develop independently, meeting the requirements stated in our license.

During the duration of our project, you may also do any of the following:
* log issues
* participate in discussion of features/issues
* submit a pull request of a feature, bug fix, or documentation

Thank you for checking out our project!

## Building and Deploying

### Build

In order to build the app, ensure that you have [Node.js](https://nodejs.org/) installed.

Clone a copy of the repo:

```bash
git clone https://github.com/lisicase/vonia
```

Change to the Vonia directory:

```git bash
cd vonia
```

Install dev dependencies via ```npm```.

Run the app locally:

```bash
npm start
```

### Deploy

Navigate to the deployment/publishing branch:

```bash
git switch published
```

Deploy the local version to the web (currently hosted on GitHub pages):

```bash
npm run deploy
```

## Project Background

### Purpose

Public bathrooms can often be difficult to find; there's little way of knowing in advance of entering a bathroom whether it is clean or if there's a better one nearby. Additionally, public restrooms are slowly becoming even more scarce as the pandemic continues to dominate our lives. Both of these points pose a significant problem, particularly for those who have to be on the move frequently (gig workers, contract workers, the unhoused) and overall public health.

We aim to help address this problem by making it easy for users to quickly find restrooms in convenient locations and to learn about a specific location to decide what works best for them.

### Research

#### Problem Space

Lack of bathroom access is a serious humanitarian and public health issue:
* Bathrooms are difficult to access, particularly for people who have to be on the move frequently.
* Bathrooms have become even scarcer with the pandemic, and when looking for ability-, gender- and race-inclusive options.

Key Data:
* 224 toilets would need to be added to meet the needs of Seattle's homeless population. *([David G. Jones, City Auditor, 2019](http://www.seattle.gov/Documents/Departments/CityAuditor/auditreports/Navigation%20Team%20Audit_2-7-2019_revised.pdf))*
* ~60% of transgender Americans have avoided public bathrooms for fear of being harassed. *([National Center for Transgender Equality, 2016](https://transequality.org/sites/default/files/docs/usts/USTS-Executive-Summary-Dec17.pdf))*
* Automated bathroom dispensers often don't work well on dark skin. *([Taylor Goethe, Rochester Institute of Technology, 2019](https://reporter.rit.edu/tech/bigotry-encoded-racial-bias-technology))*
* Paper towers are more sanitary than electric air dryers. *([Huang C, Ma W, Stack S. The hygienic efficacy of different hand-drying methods: a review of the evidence. Mayo Clin Proc. 2012;87(8):791-798. doi:10.1016/j.mayocp.2012.02.019)](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3538484/)*

#### User Research

Survey Stats:
* Responses: 93
* Occupation: 50 students, 29 gig workers, 2 school/staff faculty, 2 school/staff faculty, 12 other full time, 4 other

Takeaways:
* Although people are comfortable using public bathrooms in theory, many people have strong preferences and may go out of their way to avoid using a public bathroom.
* Common concerns include location, smell, cleanliness, accessibility, maintenance quality/recency, and privacy.

#### User Testing

We also conducted user validation and usability testing intermittently throughout our project. Users included primarily included fellow students, recent university graduates, and miscellaneous users from [usertesting.com](https://www.usertesting.com/).

### Design

[Figma Wireframes](https://www.figma.com/file/sRwcbomxVnAqCzFRp71NTz/Spotty) include a record of our design over time for various pages, informed by user testing.

### Code

| Page/Folder | Use |
| ------------- | ------------- |
| BathroomPage | Information for a specific bathroom |
| Favorites | List of favorite bathrooms for a specific user |
| Home | Home page including map and navigation to other pages |
| LandingPage | Overall project info for presentation at Capstone Night |
| Map | Map displaying bathrooms (map itself, list of buildings, popups, search, and filters) | 
| Register | Sign-up up to use Spotty |
| Reviews | Submit review |
| Shared | Smaller features used throughout the application |
| Signin | Sign-in to use Spotty's account-specific features |

