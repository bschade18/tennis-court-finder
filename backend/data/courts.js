const courts = [
  {
    name: 'Alief Park',
    address: '11903 Bellaire, 77072',
    numCourts: 4,
    hasLights: true,
    hasPracticeWall: true,
    isCommunityCenter: true,
  },
  {
    name: 'Anderson Park',
    address: '5701 Beverlyhill, 77057',
    numCourts: 2,
    hasLights: true,
    hasPracticeWall: false,
    isCommunityCenter: false,
  },
  {
    name: 'Bendwood Park',
    address: '12700 Kimberley, 77024',
    numCourts: 2,
    hasLights: true,
    hasPracticeWall: true,
    isCommunityCenter: true,
  },
  {
    name: 'Beverly Hills Park',
    address: '10201 Kingspoint, 77075',
    numCourts: 1,
    hasLights: false,
    hasPracticeWall: false,
    isCommunityCenter: true,
  },
  {
    name: 'Bonham Park',
    address: '8401 Braes Acres, 77075',
    numCourts: 2,
    hasLights: true,
    hasPracticeWall: true,
    isCommunityCenter: false,
  },
  {
    name: 'Briarmeadow Park',
    address: '7703 Richmond, 77063',
    numCourts: 2,
    hasLights: true,
    hasPracticeWall: false,
    isCommunityCenter: false,
  },
  {
    name: 'Brown (Herman) Park',
    address: '400 Mercury, 77013',
    numCourts: 4,
    hasLights: true,
    hasPracticeWall: null,
    isCommunityCenter: false,
  },
  {
    name: 'Carverdale Park',
    address: '9801 Tanner, 77041',
    numCourts: 2,
    hasLights: true,
    hasPracticeWall: false,
    isCommunityCenter: true,
  },
  {
    name: 'Charlton Park',
    address: '8200 Park Place, 77017',
    numCourts: 2,
    hasLights: false,
    hasPracticeWall: false,
    isCommunityCenter: true,
  },
  {
    name: 'Cherryhurst Park',
    address: '1700 Missouri, 77006',
    numCourts: 1,
    hasLights: true,
    hasPracticeWall: true,
    isCommunityCenter: true,
  },
  {
    name: 'Chimney Rock Park (Platou)',
    address: '11655 Chimney Rock, 77035',
    numCourts: 2,
    hasLights: true,
    hasPracticeWall: false,
    isCommunityCenter: true,
  },
  {
    name: 'Cleveland Park',
    address: '200 Jackson Hill, 77007',
    numCourts: 2,
    hasLights: false,
    hasPracticeWall: false,
    isCommunityCenter: false,
  },
  {
    name: 'Clinton Park',
    address: '200 Mississippi, 77029',
    numCourts: 2,
    hasLights: true,
    hasPracticeWall: false,
    isCommunityCenter: true,
  },
  {
    name: 'Cloverland Park',
    address: '3801 Hickok, 77047',
    numCourts: 2,
    hasLights: true,
    hasPracticeWall: false,
    isCommunityCenter: true,
  },
  {
    name: 'Cole Creek Park',
    address: '7200 Drowsey Pine, 77092',
    numCourts: 2,
    hasLights: false,
    hasPracticeWall: false,
    isCommunityCenter: false,
  },
  {
    name: 'Crestomont Park',
    address: '5100 Selinsky, 77048',
    numCourts: 2,
    hasLights: true,
    hasPracticeWall: true,
    isCommunityCenter: true,
  },
  {
    name: 'Dodson Lake Park',
    address: '9010 Dodson, 77093',
    numCourts: 2,
    hasLights: true,
    hasPracticeWall: true,
    isCommunityCenter: true,
  },
  {
    name: 'Dow Park',
    address: '7942 Rockhill, 77061',
    numCourts: 3,
    hasLights: true,
    hasPracticeWall: true,
    isCommunityCenter: false,
  },
  {
    name: 'Emancipation Park',
    address: '3018 Dowling, 77004',
    numCourts: 2,
    hasLights: true,
    hasPracticeWall: true,
    isCommunityCenter: true,
  },
  {
    name: 'Finnigan Park',
    address: '4900 Providence, 77020',
    numCourts: 2,
    hasLights: true,
    hasPracticeWall: false,
    isCommunityCenter: true,
  },
  {
    name: 'Fleming Park',
    address: '1901 Sunset, 77005',
    numCourts: 2,
    hasLights: false,
    hasPracticeWall: false,
    isCommunityCenter: false,
  },
  {
    name: 'Freeway Manor Park',
    address: '2241 Bronson, 77034',
    numCourts: 1,
    hasLights: true,
    hasPracticeWall: false,
    isCommunityCenter: false,
  },
  {
    name: 'Grady Park',
    address: '1700 Yorktown, 77056',
    numCourts: 1,
    hasLights: true,
    hasPracticeWall: false,
    isCommunityCenter: false,
  },
  {
    name: 'Graham Park',
    address: '540 West 34th, 77018',
    numCourts: 2,
    hasLights: true,
    hasPracticeWall: false,
    isCommunityCenter: false,
  },
  {
    name: 'Greenwood Park',
    address: '602 Beresford, 77015',
    numCourts: 2,
    hasLights: true,
    hasPracticeWall: false,
    isCommunityCenter: false,
  },
  {
    name: 'Grimes Park (Lease)',
    address: '5150 Reed, 77033',
    numCourts: 2,
    hasLights: true,
    hasPracticeWall: false,
    isCommunityCenter: false,
  },
  {
    name: 'Hager (Lee) Park',
    address: '12100 Landsdowne, 77035',
    numCourts: 1,
    hasLights: true,
    hasPracticeWall: true,
    isCommunityCenter: false,
  },
  {
    name: 'Halbert Park',
    address: '200 East 23rd, 77008',
    numCourts: 1,
    hasLights: true,
    hasPracticeWall: false,
    isCommunityCenter: false,
  },
  {
    name: 'Hartman Park',
    address: '9311 Avenue P, 77012',
    numCourts: 2,
    hasLights: true,
    hasPracticeWall: false,
    isCommunityCenter: true,
  },
  {
    name: 'Haviland Park',
    address: '11600 Haviland, 77035',
    numCourts: 2,
    hasLights: true,
    hasPracticeWall: false,
    isCommunityCenter: true,
  },
  {
    name: 'Highland Park',
    address: '3316 DeSoto, 77091',
    numCourts: 2,
    hasLights: true,
    hasPracticeWall: true,
    isCommunityCenter: true,
  },
  {
    name: 'Hutcheson Park',
    address: '5400 Lockwood, 77026',
    numCourts: 1,
    hasLights: true,
    hasPracticeWall: false,
    isCommunityCenter: false,
  },
  {
    name: 'Independence Heights Park',
    address: '601 East 35th, 77022',
    numCourts: 1,
    hasLights: true,
    hasPracticeWall: false,
    isCommunityCenter: true,
  },
  {
    name: 'Jasper, Smokey Park',
    address: '13400 River Trail, 77050',
    numCourts: 2,
    hasLights: false,
    hasPracticeWall: false,
    isCommunityCenter: false,
  },
  {
    name: 'Jaycee Park',
    address: '1300 Seamist, 77008',
    numCourts: 2,
    hasLights: false,
    hasPracticeWall: true,
    isCommunityCenter: false,
  },
  {
    name: 'Jones (Walter) Park',
    address: '8000 Coastway, 77075',
    numCourts: 2,
    hasLights: false,
    hasPracticeWall: false,
    isCommunityCenter: false,
  },
  {
    name: 'Keith-Wiess Park',
    address: '12300 Aldine-Westfield, 77093',
    numCourts: 2,
    hasLights: true,
    hasPracticeWall: false,
    isCommunityCenter: false,
  },
  {
    name: 'Law Park',
    address: '6200 Scarlet, 77033',
    numCourts: 2,
    hasLights: true,
    hasPracticeWall: true,
    isCommunityCenter: false,
  },
  {
    name: 'Lincoln Park',
    address: '979 Grenshaw, 77088',
    numCourts: 1,
    hasLights: true,
    hasPracticeWall: true,
    isCommunityCenter: false,
  },
  {
    name: 'Linkwood Park',
    address: '3699 Norris, 77025',
    numCourts: 2,
    hasLights: true,
    hasPracticeWall: true,
    isCommunityCenter: true,
  },
  {
    name: 'Magnum Manor Park',
    address: '5235 Saxon, 77092',
    numCourts: 1,
    hasLights: false,
    hasPracticeWall: true,
    isCommunityCenter: false,
  },
  {
    name: 'Mason Park',
    address: '541 South 75th, 77023',
    numCourts: 2,
    hasLights: true,
    hasPracticeWall: true,
    isCommunityCenter: false,
  },
  {
    name: 'Mason Park',
    address: '541 South 75th, 77023',
    numCourts: 2,
    hasLights: true,
    hasPracticeWall: true,
    isCommunityCenter: false,
  },
  {
    name: 'Meadowcreek Village Park',
    address: '5333 Berry Creek, 77017',
    numCourts: 2,
    hasLights: true,
    hasPracticeWall: false,
    isCommunityCenter: true,
  },
  {
    name: 'Melrose Park',
    address: '12200 Melrose Park, 77076',
    numCourts: 4,
    hasLights: true,
    hasPracticeWall: false,
    isCommunityCenter: true,
  },
  {
    name: 'Meyerland Park',
    address: '5151 Jason, 77096',
    numCourts: 2,
    hasLights: true,
    hasPracticeWall: false,
    isCommunityCenter: false,
  },
  {
    name: 'Milroy Park',
    address: '1205 Yale, 77008',
    numCourts: 1,
    hasLights: true,
    hasPracticeWall: false,
    isCommunityCenter: true,
  },
  {
    name: 'Montie Beach Park',
    address: '915 Northwood, 77009',
    numCourts: 2,
    hasLights: true,
    hasPracticeWall: false,
    isCommunityCenter: true,
  },
  {
    name: 'Moody Park',
    address: '3725 Fulton, 77009',
    numCourts: 2,
    hasLights: true,
    hasPracticeWall: false,
    isCommunityCenter: true,
  },
  {
    name: 'Nieto Park',
    address: '500 Port, 77020',
    numCourts: 1,
    hasLights: true,
    hasPracticeWall: false,
    isCommunityCenter: false,
  },
  {
    name: 'Northline Park',
    address: '6902 Nordling, 77076',
    numCourts: 2,
    hasLights: true,
    hasPracticeWall: false,
    isCommunityCenter: false,
  },
  {
    name: 'Nottingham Park',
    address: '14205 Kimberley, 77079',
    numCourts: 2,
    hasLights: true,
    hasPracticeWall: true,
    isCommunityCenter: false,
  },
  {
    name: 'Oak Forest',
    address: '2100 Judiway, 77018',
    numCourts: 2,
    hasLights: true,
    hasPracticeWall: false,
    isCommunityCenter: false,
  },
  {
    name: 'Proctor Plaza',
    address: '803 W. Temple, 77009',
    numCourts: 1,
    hasLights: true,
    hasPracticeWall: false,
    isCommunityCenter: true,
  },
  {
    name: 'Reeves (Gail) Park',
    address: '8800 Mullins, 77096',
    numCourts: 2,
    hasLights: false,
    hasPracticeWall: true,
    isCommunityCenter: false,
  },
  {
    name: 'River Oaks Park',
    address: '3600 Locke Lane, 77027',
    numCourts: 4,
    hasLights: false,
    hasPracticeWall: false,
    isCommunityCenter: true,
  },
  {
    name: 'Robinson, J. Sr. Park',
    address: '1422 Ledwicke, 77029',
    numCourts: 1,
    hasLights: true,
    hasPracticeWall: false,
    isCommunityCenter: true,
  },
  {
    name: 'Sagemont Park',
    address: '1507 Hughes, 77089',
    numCourts: 2,
    hasLights: true,
    hasPracticeWall: false,
    isCommunityCenter: true,
  },
  {
    name: 'Scales, Zollie Park',
    address: '3501 Corder, 77021',
    numCourts: 1,
    hasLights: true,
    hasPracticeWall: false,
    isCommunityCenter: false,
  },
  {
    name: 'Scenic Woods Park',
    address: '449 Lakewood, 77017',
    numCourts: 2,
    hasLights: true,
    hasPracticeWall: false,
    isCommunityCenter: false,
  },
  {
    name: 'Schwartz Park',
    address: '8203 Vogue, 77055',
    numCourts: 2,
    hasLights: true,
    hasPracticeWall: false,
    isCommunityCenter: false,
  },
  {
    name: 'Settegast Park',
    address: '3001 Garrow, 77003',
    numCourts: 1,
    hasLights: true,
    hasPracticeWall: false,
    isCommunityCenter: true,
  },
  {
    name: 'Sharpstown Park',
    address: '8200 Bellaire, 77036',
    numCourts: 2,
    hasLights: true,
    hasPracticeWall: false,
    isCommunityCenter: true,
  },
  {
    name: 'Spotts Park',
    address: '401 S Heights, 77007',
    numCourts: 2,
    hasLights: true,
    hasPracticeWall: false,
    isCommunityCenter: false,
  },
  {
    name: 'Sunnyside Park',
    address: '3502 Bellfort, 77051',
    numCourts: 2,
    hasLights: true,
    hasPracticeWall: false,
    isCommunityCenter: true,
  },
  {
    name: 'Tanglewood Park',
    address: '5801 Woodway, 77057',
    numCourts: 2,
    hasLights: true,
    hasPracticeWall: false,
    isCommunityCenter: false,
  },
  {
    name: 'Tidwell Park',
    address: '9720 Spaulding, 77016',
    numCourts: 2,
    hasLights: true,
    hasPracticeWall: false,
    isCommunityCenter: true,
  },
  {
    name: 'Townwood Park',
    address: '3403 Simsbrook, 77045',
    numCourts: 1,
    hasLights: true,
    hasPracticeWall: false,
    isCommunityCenter: false,
  },
  {
    name: 'Westbury Park',
    address: '5635 Willowbend, 77096',
    numCourts: 2,
    hasLights: true,
    hasPracticeWall: false,
    isCommunityCenter: false,
  },
  {
    name: 'Westwood Park',
    address: '4045 Lemac, 77025',
    numCourts: 2,
    hasLights: true,
    hasPracticeWall: false,
    isCommunityCenter: false,
  },
  {
    name: 'Willow Park',
    address: '10400 Cliftwood, 77035',
    numCourts: 2,
    hasLights: true,
    hasPracticeWall: true,
    isCommunityCenter: false,
  },
  {
    name: 'Wilson Memorial Park',
    address: '100 Gilpin, 77034',
    numCourts: 2,
    hasLights: true,
    hasPracticeWall: false,
    isCommunityCenter: false,
  },
  {
    name: 'Windsor Village Park',
    address: '14441 Croquet, 77085',
    numCourts: 2,
    hasLights: true,
    hasPracticeWall: false,
    isCommunityCenter: true,
  },
  {
    name: 'Winzer Park',
    address: '7300 Carver, 77088',
    numCourts: 2,
    hasLights: true,
    hasPracticeWall: false,
    isCommunityCenter: false,
  },
  {
    name: 'Woodland Park',
    address: '212 Parkview, 77009',
    numCourts: 1,
    hasLights: true,
    hasPracticeWall: false,
    isCommunityCenter: true,
  },
  {
    name: 'Young (Karl) Park',
    address: '7800 Stella Link, 77025',
    numCourts: 1,
    hasLights: false,
    hasPracticeWall: false,
    isCommunityCenter: false,
  },
];

export default courts;
