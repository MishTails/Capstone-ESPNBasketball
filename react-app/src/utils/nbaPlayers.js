const nbaPlayers = {
  'Precious Achiuwa': { name: 'Precious Achiuwa', position: 'SF', team: 'Toronto Raptors' },
  'Steven Adams': { name: 'Steven Adams', position: 'C', team: 'Memphis Grizzlies' },
  'Bam Adebayo': { name: 'Bam Adebayo', position: 'C', team: 'Miami Heat' },
  'Ochai Agbaji': { name: 'Ochai Agbaji', position: 'SF', team: 'Utah Jazz' },
  'Santi Aldama': { name: 'Santi Aldama', position: 'C', team: 'Memphis Grizzlies' },
  'Nickeil Alexander-Walker': {
    name: 'Nickeil Alexander-Walker',
    position: 'SG',
    team: 'Utah Jazz'
  },
  'Grayson Allen': { name: 'Grayson Allen', position: 'SG', team: 'Milwaukee Bucks' },
  'Jarrett Allen': { name: 'Jarrett Allen', position: 'C', team: 'Cleveland Cavaliers' },
  'Jose Alvarado': {
    name: 'Jose Alvarado',
    position: 'G',
    team: 'New Orleans Pelicans'
  },
  'Kyle Anderson': {
    name: 'Kyle Anderson',
    position: 'PF',
    team: 'Minnesota Timberwolves'
  },
  'Giannis Antetokounmpo': {
    name: 'Giannis Antetokounmpo',
    position: 'F',
    team: 'Milwaukee Bucks'
  },
  'Kostas Antetokounmpo': {
    name: 'Kostas Antetokounmpo',
    position: 'PF',
    team: 'Chicago Bulls'
  },
  'Thanasis Antetokounmpo': {
    name: 'Thanasis Antetokounmpo',
    position: 'SF',
    team: 'Milwaukee Bucks'
  },
  'Cole Anthony': { name: 'Cole Anthony', position: 'PG', team: 'Orlando Magic' },
  'OG Anunoby': { name: 'OG Anunoby', position: 'SF', team: 'Toronto Raptors' },
  'Ryan Arcidiacono': { name: 'Ryan Arcidiacono', position: 'G', team: 'New York Knicks' },
  'Deni Avdija': { name: 'Deni Avdija', position: 'SG', team: 'Washington Wizards' },
  'Deandre Ayton': { name: 'Deandre Ayton', position: 'C', team: 'Phoenix Suns' },
  'Udoka Azubuike': { name: 'Udoka Azubuike', position: 'C', team: 'Utah Jazz' },
  'Ibou Badji': { name: 'Ibou Badji', position: 'C', team: 'Portland Trail Blazers' },
  'Marvin Bagley III': {
    name: 'Marvin Bagley III',
    position: 'PF',
    team: 'Detroit Pistons'
  },
  'Patrick Baldwin, Jr.': {
    name: 'Patrick Baldwin, Jr.',
    position: 'SG',
    team: 'Golden State Warriors'
  },
  'LaMelo Ball': { name: 'LaMelo Ball', position: 'G', team: 'Charlotte Hornets' },
  'Lonzo Ball': { name: 'Lonzo Ball', position: 'PG', team: 'Chicago Bulls' },
  'Mohamed Bamba': { name: 'Mohamed Bamba', position: 'C', team: 'Orlando Magic' },
  'Paolo Banchero': { name: 'Paolo Banchero', position: 'C', team: 'Orlando Magic' },
  'Desmond Bane': { name: 'Desmond Bane', position: 'SG', team: 'Memphis Grizzlies' },
  'Dalano Banton': { name: 'Dalano Banton', position: 'PG', team: 'Toronto Raptors' },
  'Dominick Barlow': { name: 'Dominick Barlow', position: 'F', team: 'San Antonio Spurs' },
  'Harrison Barnes': { name: 'Harrison Barnes', position: 'SF', team: 'Sacramento Kings' },
  'Scottie Barnes': { name: 'Scottie Barnes', position: 'SF', team: 'Toronto Raptors' },
  'R.J. Barrett': { name: 'R.J. Barrett', position: 'SG', team: 'New York Knicks' },
  'Will Barton': { name: 'Will Barton', position: 'GF', team: 'Washington Wizards' },
  'Charles Bassey': { name: 'Charles Bassey', position: 'PF', team: 'San Antonio Spurs' },
  'Keita Bates-Diop': {
    name: 'Keita Bates-Diop',
    position: 'SF',
    team: 'San Antonio Spurs'
  },
  'Nicolas Batum': {
    name: 'Nicolas Batum',
    position: 'F',
    team: 'Los Angeles Clippers'
  },
  'Darius Bazley': {
    name: 'Darius Bazley',
    position: 'PF',
    team: 'Oklahoma City Thunder'
  },
  'Bradley Beal': { name: 'Bradley Beal', position: 'SG', team: 'Washington Wizards' },
  'Malik Beasley': { name: 'Malik Beasley', position: 'SG', team: 'Utah Jazz' },
  'MarJon Beauchamp': { name: 'MarJon Beauchamp', position: 'SG', team: 'Milwaukee Bucks' },
  'Davis Bertans': { name: 'Davis Bertans', position: 'SF', team: 'Dallas Mavericks' },
  'Patrick Beverley': {
    name: 'Patrick Beverley',
    position: 'PG',
    team: 'Los Angeles Lakers'
  },
  'Saddiq Bey': { name: 'Saddiq Bey', position: 'F', team: 'Detroit Pistons' },
  'Khem Birch': { name: 'Khem Birch', position: 'PF', team: 'Toronto Raptors' },
  'Goga Bitadze': { name: 'Goga Bitadze', position: 'C', team: 'Indiana Pacers' },
  'Bismack Biyombo': { name: 'Bismack Biyombo', position: 'PF', team: 'Phoenix Suns' },
  'Buddy Boeheim': { name: 'Buddy Boeheim', position: 'SG', team: 'Detroit Pistons' },
  'Bogdan Bogdanovic': { name: 'Bogdan Bogdanovic', position: 'SG', team: 'Atlanta Hawks' },
  'Bojan Bogdanovic': { name: 'Bojan Bogdanovic', position: 'F', team: 'Detroit Pistons' },
  'Bol Bol': { name: 'Bol Bol', position: 'C', team: 'Orlando Magic' },
  'Leandro Bolmaro': { name: 'Leandro Bolmaro', position: 'SG', team: 'Utah Jazz' },
  'Devin Booker': { name: 'Devin Booker', position: 'SG', team: 'Phoenix Suns' },
  'B.J. Boston, Jr.': {
    name: 'B.J. Boston, Jr.',
    position: 'SG',
    team: 'Los Angeles Clippers'
  },
  'Chris Boucher': { name: 'Chris Boucher', position: 'PF', team: 'Toronto Raptors' },
  'James Bouknight': { name: 'James Bouknight', position: 'G', team: 'Charlotte Hornets' },
  'Tony Bradley': { name: 'Tony Bradley', position: 'C', team: 'Chicago Bulls' },
  'Malaki Branham': { name: 'Malaki Branham', position: 'GF', team: 'San Antonio Spurs' },
  'Christian Braun': { name: 'Christian Braun', position: 'SF', team: 'Denver Nuggets' },
  'Mikal Bridges': { name: 'Mikal Bridges', position: 'SG', team: 'Phoenix Suns' },
  'Oshae Brissett': { name: 'Oshae Brissett', position: 'PF', team: 'Indiana Pacers' },
  'Malcolm Brogdon': { name: 'Malcolm Brogdon', position: 'SG', team: 'Boston Celtics' },
  'Dillon Brooks': { name: 'Dillon Brooks', position: 'F', team: 'Memphis Grizzlies' },
  'Greg Brown III': {
    name: 'Greg Brown III',
    position: 'SF',
    team: 'Portland Trail Blazers'
  },
  'Jaylen Brown': { name: 'Jaylen Brown', position: 'SF', team: 'Boston Celtics' },
  'Bruce Brown, Jr.': { name: 'Bruce Brown, Jr.', position: 'SG', team: 'Denver Nuggets' },
  'Troy Brown, Jr.': {
    name: 'Troy Brown, Jr.',
    position: 'SF',
    team: 'Los Angeles Lakers'
  },
  'Kendall Brown': { name: 'Kendall Brown', position: 'G', team: 'Indiana Pacers' },
  'Moses Brown': { name: 'Moses Brown', position: 'C', team: 'Los Angeles Clippers' },
  'Jalen Brunson': { name: 'Jalen Brunson', position: 'PG', team: 'New York Knicks' },
  'Thomas Bryant': { name: 'Thomas Bryant', position: 'C', team: 'Los Angeles Lakers' },
  'Reggie Bullock': { name: 'Reggie Bullock', position: 'SG', team: 'Dallas Mavericks' },
  'Alec Burks': { name: 'Alec Burks', position: 'SG', team: 'Detroit Pistons' },
  'Jimmy Butler': { name: 'Jimmy Butler', position: 'GF', team: 'Miami Heat' },
  'John Butler': {
    name: 'John Butler',
    position: 'C',
    team: 'Portland Trail Blazers'
  },
  'Jamal Cain': { name: 'Jamal Cain', position: 'F', team: 'Miami Heat' },
  'Kentavious Caldwell-Pope': {
    name: 'Kentavious Caldwell-Pope',
    position: 'SG',
    team: 'Denver Nuggets'
  },
  'Facundo Campazzo': {
    name: 'Facundo Campazzo',
    position: 'PG',
    team: 'Dallas Mavericks'
  },
  'Vlatko Cancar': { name: 'Vlatko Cancar', position: 'SF', team: 'Denver Nuggets' },
  'Clint Capela': { name: 'Clint Capela', position: 'PF', team: 'Atlanta Hawks' },
  'Vernon Carey, Jr.': {
    name: 'Vernon Carey, Jr.',
    position: 'PF',
    team: 'Washington Wizards'
  },
  'Jevon Carter': { name: 'Jevon Carter', position: 'PG', team: 'Milwaukee Bucks' },
  'Wendell Carter, Jr.': {
    name: 'Wendell Carter, Jr.',
    position: 'PF',
    team: 'Orlando Magic'
  },
  'Alex Caruso': { name: 'Alex Caruso', position: 'G', team: 'Chicago Bulls' },
  'Julian Champagnie': {
    name: 'Julian Champagnie',
    position: 'F',
    team: 'Philadelphia Sixers'
  },
  'Justin Champagnie': { name: 'Justin Champagnie', position: 'F', team: 'Toronto Raptors' },
  'Kennedy Chandler': {
    name: 'Kennedy Chandler',
    position: 'PG',
    team: 'Memphis Grizzlies'
  },
  'Max Christie': { name: 'Max Christie', position: 'F', team: 'Los Angeles Lakers' },
  'Josh Christopher': { name: 'Josh Christopher', position: 'G', team: 'Houston Rockets' },
  'Brandon Clarke': { name: 'Brandon Clarke', position: 'PF', team: 'Memphis Grizzlies' },
  'Jordan Clarkson': { name: 'Jordan Clarkson', position: 'G', team: 'Utah Jazz' },
  'Nicolas Claxton': { name: 'Nicolas Claxton', position: 'C', team: 'Brooklyn Nets' },
  'Amir Coffey': { name: 'Amir Coffey', position: 'SF', team: 'Los Angeles Clippers' },
  'John Collins': { name: 'John Collins', position: 'PF', team: 'Atlanta Hawks' },
  'Zach Collins': { name: 'Zach Collins', position: 'C', team: 'San Antonio Spurs' },
  'Mike Conley': { name: 'Mike Conley', position: 'PG', team: 'Utah Jazz' },
  'Pat Connaughton': { name: 'Pat Connaughton', position: 'SF', team: 'Milwaukee Bucks' },
  'Robert Covington': {
    name: 'Robert Covington',
    position: 'F',
    team: 'Los Angeles Clippers'
  },
  'Torrey Craig': { name: 'Torrey Craig', position: 'GF', team: 'Phoenix Suns' },
  'Jae Crowder': { name: 'Jae Crowder', position: 'SF', team: 'Phoenix Suns' },
  'Jarrett Culver': { name: 'Jarrett Culver', position: 'SG', team: 'Atlanta Hawks' },
  'Cade Cunningham': { name: 'Cade Cunningham', position: 'SF', team: 'Detroit Pistons' },
  'Seth Curry': { name: 'Seth Curry', position: 'G', team: 'Brooklyn Nets' },
  'Stephen Curry': {
    name: 'Stephen Curry',
    position: 'G',
    team: 'Golden State Warriors'
  },
  'Dyson Daniels': {
    name: 'Dyson Daniels',
    position: 'GF',
    team: 'New Orleans Pelicans'
  },
  'Anthony Davis': { name: 'Anthony Davis', position: 'PF', team: 'Los Angeles Lakers' },
  'Johnny Davis': { name: 'Johnny Davis', position: 'F', team: 'Washington Wizards' },
  'Terence Davis': { name: 'Terence Davis', position: 'SF', team: 'Sacramento Kings' },
  'J.D. Davison': { name: 'J.D. Davison', position: 'F', team: 'Boston Celtics' },
  'Darius Days': { name: 'Darius Days', position: 'PF', team: 'Houston Rockets' },
  'DeMar DeRozan': { name: 'DeMar DeRozan', position: 'GF', team: 'Chicago Bulls' },
  'Dewayne Dedmon': { name: 'Dewayne Dedmon', position: 'PF', team: 'Miami Heat' },
  'Matt Dellavedova': { name: 'Matt Dellavedova', position: 'G', team: 'Sacramento Kings' },
  'Donte DiVincenzo': {
    name: 'Donte DiVincenzo',
    position: 'SG',
    team: 'Golden State Warriors'
  },
  'Moussa Diabate': {
    name: 'Moussa Diabate',
    position: 'PF',
    team: 'Los Angeles Clippers'
  },
  'Mamadi Diakite': {
    name: 'Mamadi Diakite',
    position: 'PF',
    team: 'Cleveland Cavaliers'
  },
  'Hamidou Diallo': { name: 'Hamidou Diallo', position: 'SG', team: 'Detroit Pistons' },
  'Gorgui Dieng': { name: 'Gorgui Dieng', position: 'FC', team: 'San Antonio Spurs' },
  'Ousmane Dieng': {
    name: 'Ousmane Dieng',
    position: 'SG',
    team: 'Oklahoma City Thunder'
  },
  'Spencer Dinwiddie': {
    name: 'Spencer Dinwiddie',
    position: 'PG',
    team: 'Dallas Mavericks'
  },
  'Luka Doncic': { name: 'Luka Doncic', position: 'SF', team: 'Dallas Mavericks' },
  'Tyler Dorsey': { name: 'Tyler Dorsey', position: 'SG', team: 'Dallas Mavericks' },
  'Luguentz Dort': {
    name: 'Luguentz Dort',
    position: 'PG',
    team: 'Oklahoma City Thunder'
  },
  'Ayo Dosunmu': { name: 'Ayo Dosunmu', position: 'PG', team: 'Chicago Bulls' },
  'Devon Dotson': { name: 'Devon Dotson', position: 'PG', team: 'Washington Wizards' },
  'Jeff Dowtin': { name: 'Jeff Dowtin', position: 'PG', team: 'Toronto Raptors' },
  'Goran Dragic': { name: 'Goran Dragic', position: 'G', team: 'Chicago Bulls' },
  'Andre Drummond': { name: 'Andre Drummond', position: 'C', team: 'Chicago Bulls' },
  'Chris Duarte': { name: 'Chris Duarte', position: 'PG', team: 'Indiana Pacers' },
  'David Duke': { name: 'David Duke', position: 'SG', team: 'Brooklyn Nets' },
  'Kevin Durant': { name: 'Kevin Durant', position: 'SF', team: 'Brooklyn Nets' },
  'Jalen Duren': { name: 'Jalen Duren', position: 'PF', team: 'Detroit Pistons' },
  'Tari Eason': { name: 'Tari Eason', position: 'F', team: 'Houston Rockets' },
  'Anthony Edwards': {
    name: 'Anthony Edwards',
    position: 'SF',
    team: 'Minnesota Timberwolves'
  },
  'Kessler Edwards': { name: 'Kessler Edwards', position: 'SG', team: 'Brooklyn Nets' },
  'Keon Ellis': { name: 'Keon Ellis', position: 'F', team: 'Sacramento Kings' },
  'Joel Embiid': { name: 'Joel Embiid', position: 'C', team: 'Philadelphia Sixers' },
  'Drew Eubanks': {
    name: 'Drew Eubanks',
    position: 'C',
    team: 'Portland Trail Blazers'
  },
  'Bruno Fernando': { name: 'Bruno Fernando', position: 'C', team: 'Houston Rockets' },
  'Dorian Finney-Smith': {
    name: 'Dorian Finney-Smith',
    position: 'SF',
    team: 'Dallas Mavericks'
  },
  'Malachi Flynn': { name: 'Malachi Flynn', position: 'PG', team: 'Toronto Raptors' },
  'Simone Fontecchio': { name: 'Simone Fontecchio', position: 'SF', team: 'Utah Jazz' },
  'Bryn Forbes': {
    name: 'Bryn Forbes',
    position: 'G',
    team: 'Minnesota Timberwolves'
  },
  'Trent Forrest': { name: 'Trent Forrest', position: 'SG', team: 'Atlanta Hawks' },
  'Michael Foster, Jr.': {
    name: 'Michael Foster, Jr.',
    position: 'PF',
    team: 'Philadelphia Sixers'
  },
  'Evan Fournier': { name: 'Evan Fournier', position: 'SG', team: 'New York Knicks' },
  "De'Aaron Fox": { name: "De'Aaron Fox", position: 'PG', team: 'Sacramento Kings' },
  'Markelle Fultz': { name: 'Markelle Fultz', position: 'PG', team: 'Orlando Magic' },
  'Wenyen Gabriel': {
    name: 'Wenyen Gabriel',
    position: 'PF',
    team: 'Los Angeles Lakers'
  },
  'Daniel Gafford': { name: 'Daniel Gafford', position: 'C', team: 'Washington Wizards' },
  'Danilo Gallinari': { name: 'Danilo Gallinari', position: 'SF', team: 'Boston Celtics' },
  'Darius Garland': {
    name: 'Darius Garland',
    position: 'G',
    team: 'Cleveland Cavaliers'
  },
  'Usman Garuba': { name: 'Usman Garuba', position: 'C', team: 'Houston Rockets' },
  'Luka Garza': { name: 'Luka Garza', position: 'C', team: 'Minnesota Timberwolves' },
  'Rudy Gay': { name: 'Rudy Gay', position: 'SF', team: 'Utah Jazz' },
  'Paul George': { name: 'Paul George', position: 'GF', team: 'Los Angeles Clippers' },
  'Taj Gibson': { name: 'Taj Gibson', position: 'F', team: 'Washington Wizards' },
  'Josh Giddey': { name: 'Josh Giddey', position: 'G', team: 'Oklahoma City Thunder' },
  'Shai Gilgeous-Alexander': {
    name: 'Shai Gilgeous-Alexander',
    position: 'PG',
    team: 'Oklahoma City Thunder'
  },
  'Anthony Gill': { name: 'Anthony Gill', position: 'PF', team: 'Washington Wizards' },
  'Collin Gillespie': { name: 'Collin Gillespie', position: 'PG', team: 'Denver Nuggets' },
  'Rudy Gobert': {
    name: 'Rudy Gobert',
    position: 'C',
    team: 'Minnesota Timberwolves'
  },
  'Jordan Goodwin': {
    name: 'Jordan Goodwin',
    position: 'SG',
    team: 'Washington Wizards'
  },
  'Aaron Gordon': { name: 'Aaron Gordon', position: 'F', team: 'Denver Nuggets' },
  'Eric Gordon': { name: 'Eric Gordon', position: 'G', team: 'Houston Rockets' },
  "Devonte' Graham": {
    name: "Devonte' Graham",
    position: 'PG',
    team: 'New Orleans Pelicans'
  },
  'Jerami Grant': {
    name: 'Jerami Grant',
    position: 'F',
    team: 'Portland Trail Blazers'
  },
  'A.J. Green': { name: 'A.J. Green', position: 'PG', team: 'Milwaukee Bucks' },
  'Danny Green': { name: 'Danny Green', position: 'SF', team: 'Memphis Grizzlies' },
  'Draymond Green': {
    name: 'Draymond Green',
    position: 'F',
    team: 'Golden State Warriors'
  },
  'JaMychal Green': {
    name: 'JaMychal Green',
    position: 'PF',
    team: 'Golden State Warriors'
  },
  'Jalen Green': { name: 'Jalen Green', position: 'SG', team: 'Houston Rockets' },
  'Javonte Green': { name: 'Javonte Green', position: 'G', team: 'Chicago Bulls' },
  'Jeff Green': { name: 'Jeff Green', position: 'F', team: 'Denver Nuggets' },
  'Josh Green': { name: 'Josh Green', position: 'SG', team: 'Dallas Mavericks' },
  'Blake Griffin': { name: 'Blake Griffin', position: 'PF', team: 'Boston Celtics' },
  'A.J. Griffin, Jr.': { name: 'A.J. Griffin, Jr.', position: 'SG', team: 'Atlanta Hawks' },
  'Quentin Grimes': { name: 'Quentin Grimes', position: 'SG', team: 'New York Knicks' },
  'Rui Hachimura': { name: 'Rui Hachimura', position: 'F', team: 'Washington Wizards' },
  'Tyrese Haliburton': { name: 'Tyrese Haliburton', position: 'PG', team: 'Indiana Pacers' },
  'Jordan Hall': { name: 'Jordan Hall', position: 'F', team: 'San Antonio Spurs' },
  'R.J. Hampton': { name: 'R.J. Hampton', position: 'G', team: 'Orlando Magic' },
  'Tim Hardaway Jr.': {
    name: 'Tim Hardaway Jr.',
    position: 'SG',
    team: 'Dallas Mavericks'
  },
  'James Harden': { name: 'James Harden', position: 'SG', team: 'Philadelphia Sixers' },
  'Jaden Hardy': { name: 'Jaden Hardy', position: 'SG', team: 'Dallas Mavericks' },
  'Ron Harper': { name: 'Ron Harper', position: 'G', team: 'Toronto Raptors' },
  'Montrezl Harrell': {
    name: 'Montrezl Harrell',
    position: 'F',
    team: 'Philadelphia Sixers'
  },
  'Gary Harris': { name: 'Gary Harris', position: 'SG', team: 'Orlando Magic' },
  'Joe Harris': { name: 'Joe Harris', position: 'SG', team: 'Brooklyn Nets' },
  'Kevon Harris': { name: 'Kevon Harris', position: 'SF', team: 'Orlando Magic' },
  'Tobias Harris': { name: 'Tobias Harris', position: 'F', team: 'Philadelphia Sixers' },
  'Josh Hart': { name: 'Josh Hart', position: 'SG', team: 'Portland Trail Blazers' },
  'Isaiah Hartenstein': {
    name: 'Isaiah Hartenstein',
    position: 'PF',
    team: 'New York Knicks'
  },
  'Udonis Haslem': { name: 'Udonis Haslem', position: 'FC', team: 'Miami Heat' },
  'Sam Hauser': { name: 'Sam Hauser', position: 'SF', team: 'Boston Celtics' },
  'Jaxson Hayes': {
    name: 'Jaxson Hayes',
    position: 'PF',
    team: 'New Orleans Pelicans'
  },
  'Killian Hayes': { name: 'Killian Hayes', position: 'G', team: 'Detroit Pistons' },
  'Gordon Hayward': { name: 'Gordon Hayward', position: 'GF', team: 'Charlotte Hornets' },
  'Juancho Hernangomez': {
    name: 'Juancho Hernangomez',
    position: 'F',
    team: 'Toronto Raptors'
  },
  'Willy Hernangomez': {
    name: 'Willy Hernangomez',
    position: 'C',
    team: 'New Orleans Pelicans'
  },
  'Tyler Herro': { name: 'Tyler Herro', position: 'SG', team: 'Miami Heat' },
  'Buddy Hield': { name: 'Buddy Hield', position: 'G', team: 'Indiana Pacers' },
  'Haywood Highsmith': { name: 'Haywood Highsmith', position: 'F', team: 'Miami Heat' },
  'George Hill': { name: 'George Hill', position: 'G', team: 'Milwaukee Bucks' },
  'Malcolm Hill': { name: 'Malcolm Hill', position: 'G', team: 'Chicago Bulls' },
  'Aaron Holiday': { name: 'Aaron Holiday', position: 'PG', team: 'Atlanta Hawks' },
  'Jrue Holiday': { name: 'Jrue Holiday', position: 'G', team: 'Milwaukee Bucks' },
  'Justin Holiday': { name: 'Justin Holiday', position: 'SF', team: 'Atlanta Hawks' },
  'Richaun Holmes': { name: 'Richaun Holmes', position: 'F', team: 'Sacramento Kings' },
  'Chet Holmgren': {
    name: 'Chet Holmgren',
    position: 'C',
    team: 'Oklahoma City Thunder'
  },
  'Al Horford': { name: 'Al Horford', position: 'FC', team: 'Boston Celtics' },
  'Talen Horton-Tucker': { name: 'Talen Horton-Tucker', position: 'SF', team: 'Utah Jazz' },
  'Danuel House': { name: 'Danuel House', position: 'F', team: 'Philadelphia Sixers' },
  'Caleb Houstan': { name: 'Caleb Houstan', position: 'SF', team: 'Orlando Magic' },
  'Trevor Hudgins': { name: 'Trevor Hudgins', position: 'G', team: 'Houston Rockets' },
  'Kevin Huerter': { name: 'Kevin Huerter', position: 'SF', team: 'Sacramento Kings' },
  'Feron Hunt': { name: 'Feron Hunt', position: 'SF', team: 'New York Knicks' },
  "De'Andre Hunter": { name: "De'Andre Hunter", position: 'PF', team: 'Atlanta Hawks' },
  'Bones Hyland': { name: 'Bones Hyland', position: 'G', team: 'Denver Nuggets' },
  'Serge Ibaka': { name: 'Serge Ibaka', position: 'C', team: 'Milwaukee Bucks' },
  'Andre Iguodala': {
    name: 'Andre Iguodala',
    position: 'SF',
    team: 'Golden State Warriors'
  },
  'Joe Ingles': { name: 'Joe Ingles', position: 'F', team: 'Milwaukee Bucks' },
  'Brandon Ingram': {
    name: 'Brandon Ingram',
    position: 'SF',
    team: 'New Orleans Pelicans'
  },
  'Kyrie Irving': { name: 'Kyrie Irving', position: 'G', team: 'Brooklyn Nets' },
  'Jonathan Isaac': { name: 'Jonathan Isaac', position: 'SF', team: 'Orlando Magic' },
  'Jaden Ivey': { name: 'Jaden Ivey', position: 'G', team: 'Detroit Pistons' },
  'Isaiah Jackson': { name: 'Isaiah Jackson', position: 'PF', team: 'Indiana Pacers' },
  'Jaren Jackson, Jr.': {
    name: 'Jaren Jackson, Jr.',
    position: 'PF',
    team: 'Memphis Grizzlies'
  },
  'Justin Jackson': { name: 'Justin Jackson', position: 'F', team: 'Boston Celtics' },
  'Reggie Jackson': {
    name: 'Reggie Jackson',
    position: 'G',
    team: 'Los Angeles Clippers'
  },
  'LeBron James': { name: 'LeBron James', position: 'F', team: 'Los Angeles Lakers' },
  'Ty Jerome': { name: 'Ty Jerome', position: 'PG', team: 'Golden State Warriors' },
  'Isaiah Joe': { name: 'Isaiah Joe', position: 'SG', team: 'Oklahoma City Thunder' },
  'Cameron Johnson': { name: 'Cameron Johnson', position: 'G', team: 'Phoenix Suns' },
  'Jalen Johnson': { name: 'Jalen Johnson', position: 'PF', team: 'Atlanta Hawks' },
  'James Johnson': { name: 'James Johnson', position: 'F', team: 'Indiana Pacers' },
  'Keldon Johnson': { name: 'Keldon Johnson', position: 'SF', team: 'San Antonio Spurs' },
  'Keon Johnson': {
    name: 'Keon Johnson',
    position: 'PG',
    team: 'Portland Trail Blazers'
  },
  'Nikola Jokic': { name: 'Nikola Jokic', position: 'C', team: 'Denver Nuggets' },
  'Damian Jones': { name: 'Damian Jones', position: 'PF', team: 'Los Angeles Lakers' },
  'Derrick Jones': { name: 'Derrick Jones', position: 'SF', team: 'Chicago Bulls' },
  'Herb Jones': { name: 'Herb Jones', position: 'SF', team: 'New Orleans Pelicans' },
  'Kai Jones': { name: 'Kai Jones', position: 'PF', team: 'Charlotte Hornets' },
  'Tre Jones': { name: 'Tre Jones', position: 'PG', team: 'San Antonio Spurs' },
  'Tyus Jones': { name: 'Tyus Jones', position: 'PG', team: 'Memphis Grizzlies' },
  'DeAndre Jordan': { name: 'DeAndre Jordan', position: 'C', team: 'Denver Nuggets' },
  'Cory Joseph': { name: 'Cory Joseph', position: 'PG', team: 'Detroit Pistons' },
  'Nikola Jovic': { name: 'Nikola Jovic', position: 'F', team: 'Miami Heat' },
  'Johnny Juzang': { name: 'Johnny Juzang', position: 'SG', team: 'Utah Jazz' },
  'Mfiondu Kabengele': { name: 'Mfiondu Kabengele', position: 'SF', team: 'Boston Celtics' },
  'Frank Kaminsky': { name: 'Frank Kaminsky', position: 'F', team: 'Atlanta Hawks' },
  'Trevor Keels': { name: 'Trevor Keels', position: 'PG', team: 'New York Knicks' },
  'Luke Kennard': {
    name: 'Luke Kennard',
    position: 'SG',
    team: 'Los Angeles Clippers'
  },
  'Walker Kessler': { name: 'Walker Kessler', position: 'C', team: 'Utah Jazz' },
  'Braxton Key': { name: 'Braxton Key', position: 'SF', team: 'Detroit Pistons' },
  'Corey Kispert': { name: 'Corey Kispert', position: 'SF', team: 'Washington Wizards' },
  'Maxi Kleber': { name: 'Maxi Kleber', position: 'PF', team: 'Dallas Mavericks' },
  'Nathan Knight': {
    name: 'Nathan Knight',
    position: 'PF',
    team: 'Minnesota Timberwolves'
  },
  'Kevin Knox': { name: 'Kevin Knox', position: 'SF', team: 'Detroit Pistons' },
  'Christian Koloko': { name: 'Christian Koloko', position: 'C', team: 'Toronto Raptors' },
  'John Konchar': { name: 'John Konchar', position: 'G', team: 'Memphis Grizzlies' },
  'Furkan Korkmaz': {
    name: 'Furkan Korkmaz',
    position: 'SG',
    team: 'Philadelphia Sixers'
  },
  'Luke Kornet': { name: 'Luke Kornet', position: 'F', team: 'Boston Celtics' },
  'Vit Krejci': { name: 'Vit Krejci', position: 'PG', team: 'Atlanta Hawks' },
  'Jonathan Kuminga': {
    name: 'Jonathan Kuminga',
    position: 'F',
    team: 'Golden State Warriors'
  },
  'Kyle Kuzma': { name: 'Kyle Kuzma', position: 'F', team: 'Washington Wizards' },
  'Jake LaRavia': { name: 'Jake LaRavia', position: 'F', team: 'Memphis Grizzlies' },
  'Zach LaVine': { name: 'Zach LaVine', position: 'SG', team: 'Chicago Bulls' },
  'Anthony Lamb': {
    name: 'Anthony Lamb',
    position: 'PF',
    team: 'Golden State Warriors'
  },
  'Jock Landale': { name: 'Jock Landale', position: 'C', team: 'Phoenix Suns' },
  'Romeo Langford': { name: 'Romeo Langford', position: 'SG', team: 'San Antonio Spurs' },
  'A.J. Lawson': {
    name: 'A.J. Lawson',
    position: 'F',
    team: 'Minnesota Timberwolves'
  },
  'Caris LeVert': { name: 'Caris LeVert', position: 'G', team: 'Cleveland Cavaliers' },
  'Damion Lee': { name: 'Damion Lee', position: 'G', team: 'Phoenix Suns' },
  'Alex Len': { name: 'Alex Len', position: 'C', team: 'Sacramento Kings' },
  'Kawhi Leonard': {
    name: 'Kawhi Leonard',
    position: 'F',
    team: 'Los Angeles Clippers'
  },
  'Kira Lewis, Jr.': {
    name: 'Kira Lewis, Jr.',
    position: 'PG',
    team: 'New Orleans Pelicans'
  },
  'E.J. Liddell': {
    name: 'E.J. Liddell',
    position: 'PF',
    team: 'New Orleans Pelicans'
  },
  'Damian Lillard': {
    name: 'Damian Lillard',
    position: 'G',
    team: 'Portland Trail Blazers'
  },
  'Nassir Little': {
    name: 'Nassir Little',
    position: 'SF',
    team: 'Portland Trail Blazers'
  },
  'Isaiah Livers': { name: 'Isaiah Livers', position: 'PF', team: 'Detroit Pistons' },
  'Kenny Lofton, Jr.': {
    name: 'Kenny Lofton, Jr.',
    position: 'F',
    team: 'Memphis Grizzlies'
  },
  'Kevon Looney': {
    name: 'Kevon Looney',
    position: 'PF',
    team: 'Golden State Warriors'
  },
  'Brook Lopez': { name: 'Brook Lopez', position: 'C', team: 'Milwaukee Bucks' },
  'Robin Lopez': { name: 'Robin Lopez', position: 'FC', team: 'Cleveland Cavaliers' },
  'Kevin Love': { name: 'Kevin Love', position: 'FC', team: 'Cleveland Cavaliers' },
  'Kyle Lowry': { name: 'Kyle Lowry', position: 'PG', team: 'Miami Heat' },
  'Trey Lyles': { name: 'Trey Lyles', position: 'SF', team: 'Sacramento Kings' },
  'Theo Maledon': { name: 'Theo Maledon', position: 'PG', team: 'Charlotte Hornets' },
  'Sandro Mamukelashvili': {
    name: 'Sandro Mamukelashvili',
    position: 'F',
    team: 'Milwaukee Bucks'
  },
  'Terance Mann': {
    name: 'Terance Mann',
    position: 'SG',
    team: 'Los Angeles Clippers'
  },
  'Tre Mann': { name: 'Tre Mann', position: 'PG', team: 'Oklahoma City Thunder' },
  'Boban Marjanovic': { name: 'Boban Marjanovic', position: 'C', team: 'Houston Rockets' },
  'Lauri Markkanen': { name: 'Lauri Markkanen', position: 'SF', team: 'Utah Jazz' },
  'Naji Marshall': {
    name: 'Naji Marshall',
    position: 'SF',
    team: 'New Orleans Pelicans'
  },
  'Caleb Martin': { name: 'Caleb Martin', position: 'F', team: 'Miami Heat' },
  'Cody Martin': { name: 'Cody Martin', position: 'F', team: 'Charlotte Hornets' },
  'K.J. Martin': { name: 'K.J. Martin', position: 'F', team: 'Houston Rockets' },
  'Tyrese Martin': { name: 'Tyrese Martin', position: 'GF', team: 'Atlanta Hawks' },
  'Garrison Mathews': { name: 'Garrison Mathews', position: 'SG', team: 'Houston Rockets' },
  'Bennedict Mathurin': {
    name: 'Bennedict Mathurin',
    position: 'GF',
    team: 'Indiana Pacers'
  },
  'Wesley Matthews': { name: 'Wesley Matthews', position: 'G', team: 'Milwaukee Bucks' },
  'Tyrese Maxey': { name: 'Tyrese Maxey', position: 'PG', team: 'Philadelphia Sixers' },
  'Miles McBride': { name: 'Miles McBride', position: 'G', team: 'New York Knicks' },
  'C.J. McCollum': {
    name: 'C.J. McCollum',
    position: 'G',
    team: 'New Orleans Pelicans'
  },
  'T.J. McConnell': { name: 'T.J. McConnell', position: 'G', team: 'Indiana Pacers' },
  'Jaden McDaniels': {
    name: 'Jaden McDaniels',
    position: 'F',
    team: 'Minnesota Timberwolves'
  },
  'Jalen McDaniels': {
    name: 'Jalen McDaniels',
    position: 'PF',
    team: 'Charlotte Hornets'
  },
  'Doug McDermott': { name: 'Doug McDermott', position: 'F', team: 'San Antonio Spurs' },
  'JaVale McGee': { name: 'JaVale McGee', position: 'C', team: 'Dallas Mavericks' },
  'Bryce McGowens': { name: 'Bryce McGowens', position: 'GF', team: 'Charlotte Hornets' },
  'Rodney McGruder': { name: 'Rodney McGruder', position: 'SG', team: 'Detroit Pistons' },
  'Jordan McLaughlin': {
    name: 'Jordan McLaughlin',
    position: 'G',
    team: 'Minnesota Timberwolves'
  },
  "De'Anthony Melton": {
    name: "De'Anthony Melton",
    position: 'SG',
    team: 'Philadelphia Sixers'
  },
  'Chimezie Metu': { name: 'Chimezie Metu', position: 'PF', team: 'Sacramento Kings' },
  'Khris Middleton': { name: 'Khris Middleton', position: 'SF', team: 'Milwaukee Bucks' },
  'Patty Mills': { name: 'Patty Mills', position: 'G', team: 'Brooklyn Nets' },
  'Shake Milton': { name: 'Shake Milton', position: 'SG', team: 'Philadelphia Sixers' },
  'Josh Minott': {
    name: 'Josh Minott',
    position: 'F',
    team: 'Minnesota Timberwolves'
  },
  'Davion Mitchell': { name: 'Davion Mitchell', position: 'PG', team: 'Sacramento Kings' },
  'Donovan Mitchell': {
    name: 'Donovan Mitchell',
    position: 'SG',
    team: 'Cleveland Cavaliers'
  },
  'Evan Mobley': { name: 'Evan Mobley', position: 'PF', team: 'Cleveland Cavaliers' },
  'Isaiah Mobley': {
    name: 'Isaiah Mobley',
    position: 'SF',
    team: 'Cleveland Cavaliers'
  },
  'Chima Moneke': { name: 'Chima Moneke', position: 'F', team: 'Sacramento Kings' },
  'Malik Monk': { name: 'Malik Monk', position: 'SG', team: 'Sacramento Kings' },
  'Moses Moody': {
    name: 'Moses Moody',
    position: 'SG',
    team: 'Golden State Warriors'
  },
  'Wendell Moore, Jr.': {
    name: 'Wendell Moore, Jr.',
    position: 'SF',
    team: 'Minnesota Timberwolves'
  },
  'Ja Morant': { name: 'Ja Morant', position: 'G', team: 'Memphis Grizzlies' },
  'Marcus Morris': {
    name: 'Marcus Morris',
    position: 'F',
    team: 'Los Angeles Clippers'
  },
  'Markieff Morris': { name: 'Markieff Morris', position: 'PF', team: 'Brooklyn Nets' },
  'Monte Morris': { name: 'Monte Morris', position: 'G', team: 'Washington Wizards' },
  'Trey Murphy III': {
    name: 'Trey Murphy III',
    position: 'G',
    team: 'New Orleans Pelicans'
  },
  'Dejounte Murray': { name: 'Dejounte Murray', position: 'SG', team: 'Atlanta Hawks' },
  'Jamal Murray': { name: 'Jamal Murray', position: 'SG', team: 'Denver Nuggets' },
  'Keegan Murray': { name: 'Keegan Murray', position: 'F', team: 'Sacramento Kings' },
  'Mike Muscala': {
    name: 'Mike Muscala',
    position: 'FC',
    team: 'Oklahoma City Thunder'
  },
  'Svi Mykhailiuk': { name: 'Svi Mykhailiuk', position: 'SF', team: 'New York Knicks' },
  'Larry Nance, Jr.': {
    name: 'Larry Nance, Jr.',
    position: 'SF',
    team: 'New Orleans Pelicans'
  },
  'Andrew Nembhard': { name: 'Andrew Nembhard', position: 'PG', team: 'Indiana Pacers' },
  'Aaron Nesmith': { name: 'Aaron Nesmith', position: 'F', team: 'Indiana Pacers' },
  'Raulzinho Neto': {
    name: 'Raulzinho Neto',
    position: 'PG',
    team: 'Cleveland Cavaliers'
  },
  'Georges Niang': { name: 'Georges Niang', position: 'F', team: 'Philadelphia Sixers' },
  'Daishen Nix': { name: 'Daishen Nix', position: 'GF', team: 'Houston Rockets' },
  'Zeke Nnaji': { name: 'Zeke Nnaji', position: 'PF', team: 'Denver Nuggets' },
  'Nerlens Noel': { name: 'Nerlens Noel', position: 'FC', team: 'Detroit Pistons' },
  'Jaylen Nowell': {
    name: 'Jaylen Nowell',
    position: 'SG',
    team: 'Minnesota Timberwolves'
  },
  'Frank Ntilikina': { name: 'Frank Ntilikina', position: 'PG', team: 'Dallas Mavericks' },
  'Kendrick Nunn': { name: 'Kendrick Nunn', position: 'SG', team: 'Los Angeles Lakers' },
  'Jusuf Nurkic': {
    name: 'Jusuf Nurkic',
    position: 'FC',
    team: 'Portland Trail Blazers'
  },
  'Jordan Nwora': { name: 'Jordan Nwora', position: 'F', team: 'Milwaukee Bucks' },
  "Royce O'Neale": { name: "Royce O'Neale", position: 'SF', team: 'Brooklyn Nets' },
  'Chuma Okeke': { name: 'Chuma Okeke', position: 'PF', team: 'Orlando Magic' },
  'Josh Okogie': { name: 'Josh Okogie', position: 'SG', team: 'Phoenix Suns' },
  'Onyeka Okongwu': { name: 'Onyeka Okongwu', position: 'PF', team: 'Atlanta Hawks' },
  'Isaac Okoro': { name: 'Isaac Okoro', position: 'SG', team: 'Cleveland Cavaliers' },
  'KZ Okpala': { name: 'KZ Okpala', position: 'SG', team: 'Sacramento Kings' },
  'Victor Oladipo': { name: 'Victor Oladipo', position: 'G', team: 'Miami Heat' },
  'Kelly Olynyk': { name: 'Kelly Olynyk', position: 'C', team: 'Utah Jazz' },
  'Eugene Omoruyi': {
    name: 'Eugene Omoruyi',
    position: 'F',
    team: 'Oklahoma City Thunder'
  },
  'Cedi Osman': { name: 'Cedi Osman', position: 'GF', team: 'Cleveland Cavaliers' },
  'Kelly Oubre, Jr.': {
    name: 'Kelly Oubre, Jr.',
    position: 'SF',
    team: 'Charlotte Hornets'
  },
  'Chris Paul': { name: 'Chris Paul', position: 'PG', team: 'Phoenix Suns' },
  'Cameron Payne': { name: 'Cameron Payne', position: 'G', team: 'Phoenix Suns' },
  'Gary Payton II': {
    name: 'Gary Payton II',
    position: 'G',
    team: 'Portland Trail Blazers'
  },
  'Theo Pinson': { name: 'Theo Pinson', position: 'SG', team: 'Dallas Mavericks' },
  'Scotty Pippen, Jr.': {
    name: 'Scotty Pippen, Jr.',
    position: 'G',
    team: 'Los Angeles Lakers'
  },
  'Mason Plumlee': { name: 'Mason Plumlee', position: 'PF', team: 'Charlotte Hornets' },
  'Jakob Poeltl': { name: 'Jakob Poeltl', position: 'C', team: 'San Antonio Spurs' },
  'Aleksej Pokusevski': {
    name: 'Aleksej Pokusevski',
    position: 'C',
    team: 'Oklahoma City Thunder'
  },
  'Jordan Poole': {
    name: 'Jordan Poole',
    position: 'SG',
    team: 'Golden State Warriors'
  },
  'Kevin Porter, Jr.': {
    name: 'Kevin Porter, Jr.',
    position: 'SF',
    team: 'Houston Rockets'
  },
  'Michael Porter, Jr.': {
    name: 'Michael Porter, Jr.',
    position: 'PF',
    team: 'Denver Nuggets'
  },
  'Otto Porter': { name: 'Otto Porter', position: 'SF', team: 'Toronto Raptors' },
  'Bobby Portis': { name: 'Bobby Portis', position: 'PF', team: 'Milwaukee Bucks' },
  'Kristaps Porzingis': {
    name: 'Kristaps Porzingis',
    position: 'FC',
    team: 'Washington Wizards'
  },
  'Micah Potter': { name: 'Micah Potter', position: 'C', team: 'Utah Jazz' },
  'Dwight Powell': { name: 'Dwight Powell', position: 'PF', team: 'Dallas Mavericks' },
  'Norman Powell': {
    name: 'Norman Powell',
    position: 'SG',
    team: 'Los Angeles Clippers'
  },
  'Jason Preston': {
    name: 'Jason Preston',
    position: 'G',
    team: 'Los Angeles Clippers'
  },
  'Taurean Prince': {
    name: 'Taurean Prince',
    position: 'F',
    team: 'Minnesota Timberwolves'
  },
  'Payton Pritchard': { name: 'Payton Pritchard', position: 'PG', team: 'Boston Celtics' },
  'Trevelin Queen': { name: 'Trevelin Queen', position: 'G', team: 'Indiana Pacers' },
  'Neemias Queta': { name: 'Neemias Queta', position: 'C', team: 'Sacramento Kings' },
  'Immanuel Quickley': {
    name: 'Immanuel Quickley',
    position: 'PG',
    team: 'New York Knicks'
  },
  'Julius Randle': { name: 'Julius Randle', position: 'PF', team: 'New York Knicks' },
  'Austin Reaves': { name: 'Austin Reaves', position: 'PG', team: 'Los Angeles Lakers' },
  'Cam Reddish': { name: 'Cam Reddish', position: 'G', team: 'New York Knicks' },
  'Davon Reed': { name: 'Davon Reed', position: 'SF', team: 'Denver Nuggets' },
  'Paul Reed, Jr.': {
    name: 'Paul Reed, Jr.',
    position: 'F',
    team: 'Philadelphia Sixers'
  },
  'Naz Reid': { name: 'Naz Reid', position: 'C', team: 'Minnesota Timberwolves' },
  'Nick Richards': { name: 'Nick Richards', position: 'C', team: 'Charlotte Hornets' },
  'Josh Richardson': { name: 'Josh Richardson', position: 'G', team: 'San Antonio Spurs' },
  'Austin Rivers': {
    name: 'Austin Rivers',
    position: 'SG',
    team: 'Minnesota Timberwolves'
  },
  'Duncan Robinson': { name: 'Duncan Robinson', position: 'F', team: 'Miami Heat' },
  'Mitchell Robinson': { name: 'Mitchell Robinson', position: 'C', team: 'New York Knicks' },
  'Orlando Robinson': { name: 'Orlando Robinson', position: 'PF', team: 'Miami Heat' },
  'Jeremiah Robinson-Earl': {
    name: 'Jeremiah Robinson-Earl',
    position: 'PF',
    team: 'Oklahoma City Thunder'
  },
  'Isaiah Roby': { name: 'Isaiah Roby', position: 'SF', team: 'San Antonio Spurs' },
  'David Roddy': { name: 'David Roddy', position: 'F', team: 'Memphis Grizzlies' },
  'Ryan Rollins': {
    name: 'Ryan Rollins',
    position: 'G',
    team: 'Golden State Warriors'
  },
  'Derrick Rose': { name: 'Derrick Rose', position: 'PG', team: 'New York Knicks' },
  'Terrence Ross': { name: 'Terrence Ross', position: 'SF', team: 'Orlando Magic' },
  'Terry Rozier': { name: 'Terry Rozier', position: 'G', team: 'Charlotte Hornets' },
  'Ricky Rubio': { name: 'Ricky Rubio', position: 'G', team: 'Cleveland Cavaliers' },
  "D'Angelo Russell": {
    name: "D'Angelo Russell",
    position: 'SG',
    team: 'Minnesota Timberwolves'
  },
  'Matt Ryan': { name: 'Matt Ryan', position: 'SF', team: 'Los Angeles Lakers' },
  'Domantas Sabonis': {
    name: 'Domantas Sabonis',
    position: 'PF',
    team: 'Sacramento Kings'
  },
  'Dario Saric': { name: 'Dario Saric', position: 'SF', team: 'Phoenix Suns' },
  'Admiral Schofield': { name: 'Admiral Schofield', position: 'SF', team: 'Orlando Magic' },
  'Dennis Schroder': {
    name: 'Dennis Schroder',
    position: 'PG',
    team: 'Los Angeles Lakers'
  },
  'Dereon Seabron': {
    name: 'Dereon Seabron',
    position: 'SG',
    team: 'New Orleans Pelicans'
  },
  'Alperen Sengun': { name: 'Alperen Sengun', position: 'C', team: 'Houston Rockets' },
  'Collin Sexton': { name: 'Collin Sexton', position: 'PG', team: 'Utah Jazz' },
  'Landry Shamet': { name: 'Landry Shamet', position: 'PG', team: 'Phoenix Suns' },
  "Day'Ron Sharpe": { name: "Day'Ron Sharpe", position: 'PF', team: 'Brooklyn Nets' },
  'Shaedon Sharpe': {
    name: 'Shaedon Sharpe',
    position: 'F',
    team: 'Portland Trail Blazers'
  },
  'Pascal Siakam': { name: 'Pascal Siakam', position: 'F', team: 'Toronto Raptors' },
  'Ben Simmons': { name: 'Ben Simmons', position: 'PF', team: 'Brooklyn Nets' },
  'Marko Simonovic': { name: 'Marko Simonovic', position: 'C', team: 'Chicago Bulls' },
  'Anfernee Simons': {
    name: 'Anfernee Simons',
    position: 'SG',
    team: 'Portland Trail Blazers'
  },
  'Jericho Sims': { name: 'Jericho Sims', position: 'C', team: 'New York Knicks' },
  'Marcus Smart': { name: 'Marcus Smart', position: 'PG', team: 'Boston Celtics' },
  'Dennis Smith': { name: 'Dennis Smith', position: 'PG', team: 'Charlotte Hornets' },
  'Ish Smith': { name: 'Ish Smith', position: 'PG', team: 'Denver Nuggets' },
  'Jalen Smith': { name: 'Jalen Smith', position: 'C', team: 'Indiana Pacers' },
  'Jabari Smith, Jr.': { name: 'Jabari Smith, Jr.', position: 'F', team: 'Houston Rockets' },
  'Jeremy Sochan': { name: 'Jeremy Sochan', position: 'SG', team: 'San Antonio Spurs' },
  'Jaden Springer': {
    name: 'Jaden Springer',
    position: 'SG',
    team: 'Philadelphia Sixers'
  },
  'Lamar Stevens': {
    name: 'Lamar Stevens',
    position: 'SF',
    team: 'Cleveland Cavaliers'
  },
  'Isaiah Stewart II': { name: 'Isaiah Stewart II', position: 'C', team: 'Detroit Pistons' },
  'Max Strus': { name: 'Max Strus', position: 'G', team: 'Miami Heat' },
  'Jalen Suggs': { name: 'Jalen Suggs', position: 'SG', team: 'Orlando Magic' },
  'Edmond Sumner': { name: 'Edmond Sumner', position: 'G', team: 'Brooklyn Nets' },
  'Cole Swider': { name: 'Cole Swider', position: 'F', team: 'Los Angeles Lakers' },
  "Jae'sean Tate": { name: "Jae'sean Tate", position: 'F', team: 'Houston Rockets' },
  'Jayson Tatum': { name: 'Jayson Tatum', position: 'SF', team: 'Boston Celtics' },
  'Terry Taylor': { name: 'Terry Taylor', position: 'GF', team: 'Indiana Pacers' },
  'Garrett Temple': {
    name: 'Garrett Temple',
    position: 'G',
    team: 'New Orleans Pelicans'
  },
  'Dalen Terry': { name: 'Dalen Terry', position: 'PG', team: 'Chicago Bulls' },
  'Daniel Theis': { name: 'Daniel Theis', position: 'C', team: 'Indiana Pacers' },
  'Cam Thomas': { name: 'Cam Thomas', position: 'PG', team: 'Brooklyn Nets' },
  'Klay Thompson': {
    name: 'Klay Thompson',
    position: 'G',
    team: 'Golden State Warriors'
  },
  'J.T. Thor': { name: 'J.T. Thor', position: 'PF', team: 'Charlotte Hornets' },
  'Matisse Thybulle': {
    name: 'Matisse Thybulle',
    position: 'SF',
    team: 'Philadelphia Sixers'
  },
  'Xavier Tillman, Sr.': {
    name: 'Xavier Tillman, Sr.',
    position: 'PF',
    team: 'Memphis Grizzlies'
  },
  'Isaiah Todd': { name: 'Isaiah Todd', position: 'PF', team: 'Washington Wizards' },
  'Obi Toppin': { name: 'Obi Toppin', position: 'F', team: 'New York Knicks' },
  'Juan Toscano-Anderson': {
    name: 'Juan Toscano-Anderson',
    position: 'F',
    team: 'Los Angeles Lakers'
  },
  'Karl-Anthony Towns': {
    name: 'Karl-Anthony Towns',
    position: 'C',
    team: 'Minnesota Timberwolves'
  },
  'Gary Trent, Jr.': { name: 'Gary Trent, Jr.', position: 'SG', team: 'Toronto Raptors' },
  'P.J. Tucker': { name: 'P.J. Tucker', position: 'SF', team: 'Philadelphia Sixers' },
  'Myles Turner': { name: 'Myles Turner', position: 'FC', team: 'Indiana Pacers' },
  'Jonas Valanciunas': {
    name: 'Jonas Valanciunas',
    position: 'C',
    team: 'New Orleans Pelicans'
  },
  'Fred VanVleet': { name: 'Fred VanVleet', position: 'G', team: 'Toronto Raptors' },
  'Jarred Vanderbilt': { name: 'Jarred Vanderbilt', position: 'PF', team: 'Utah Jazz' },
  'Devin Vassell': { name: 'Devin Vassell', position: 'SG', team: 'San Antonio Spurs' },
  'Gabe Vincent': { name: 'Gabe Vincent', position: 'G', team: 'Miami Heat' },
  'Noah Vonleh': { name: 'Noah Vonleh', position: 'FC', team: 'Boston Celtics' },
  'Nikola Vucevic': { name: 'Nikola Vucevic', position: 'PF', team: 'Chicago Bulls' },
  'Dean Wade': { name: 'Dean Wade', position: 'PF', team: 'Cleveland Cavaliers' },
  'Franz Wagner': { name: 'Franz Wagner', position: 'SF', team: 'Orlando Magic' },
  'Moe Wagner': { name: 'Moe Wagner', position: 'PF', team: 'Orlando Magic' },
  'Ish Wainright': { name: 'Ish Wainright', position: 'GF', team: 'Phoenix Suns' },
  'Jabari Walker': {
    name: 'Jabari Walker',
    position: 'F',
    team: 'Portland Trail Blazers'
  },
  'Lonnie Walker': { name: 'Lonnie Walker', position: 'SG', team: 'Los Angeles Lakers' },
  'John Wall': { name: 'John Wall', position: 'PG', team: 'Los Angeles Clippers' },
  'T.J. Warren': { name: 'T.J. Warren', position: 'F', team: 'Brooklyn Nets' },
  'Duane Washington, Jr.': {
    name: 'Duane Washington, Jr.',
    position: 'G',
    team: 'Phoenix Suns'
  },
  'TyTy Washington, Jr.': {
    name: 'TyTy Washington, Jr.',
    position: 'PG',
    team: 'Houston Rockets'
  },
  'P.J. Washington': {
    name: 'P.J. Washington',
    position: 'PF',
    team: 'Charlotte Hornets'
  },
  'Yuta Watanabe': { name: 'Yuta Watanabe', position: 'F', team: 'Brooklyn Nets' },
  'Lindy Waters III': {
    name: 'Lindy Waters III',
    position: 'SG',
    team: 'Oklahoma City Thunder'
  },
  'Trendon Watford': {
    name: 'Trendon Watford',
    position: 'SF',
    team: 'Portland Trail Blazers'
  },
  'Peyton Watson': { name: 'Peyton Watson', position: 'GF', team: 'Denver Nuggets' },
  'Blake Wesley': { name: 'Blake Wesley', position: 'SG', team: 'San Antonio Spurs' },
  'Russell Westbrook': {
    name: 'Russell Westbrook',
    position: 'G',
    team: 'Los Angeles Lakers'
  },
  'Coby White': { name: 'Coby White', position: 'PG', team: 'Chicago Bulls' },
  'Derrick White': { name: 'Derrick White', position: 'G', team: 'Boston Celtics' },
  'Jack White': { name: 'Jack White', position: 'SF', team: 'Denver Nuggets' },
  'Aaron Wiggins': {
    name: 'Aaron Wiggins',
    position: 'F',
    team: 'Oklahoma City Thunder'
  },
  'Andrew Wiggins': {
    name: 'Andrew Wiggins',
    position: 'F',
    team: 'Golden State Warriors'
  },
  'Alondes Williams': { name: 'Alondes Williams', position: 'G', team: 'Brooklyn Nets' },
  'Grant Williams': { name: 'Grant Williams', position: 'SF', team: 'Boston Celtics' },
  'Jalen Williams': {
    name: 'Jalen Williams',
    position: 'G',
    team: 'Oklahoma City Thunder'
  },
  'Jaylin Williams': {
    name: 'Jaylin Williams',
    position: 'C',
    team: 'Oklahoma City Thunder'
  },
  'Vincent Williams, Jr.': {
    name: 'Vincent Williams, Jr.',
    position: 'SF',
    team: 'Memphis Grizzlies'
  },
  'Kenrich Williams': {
    name: 'Kenrich Williams',
    position: 'SF',
    team: 'Oklahoma City Thunder'
  },
  'Mark Williams': { name: 'Mark Williams', position: 'C', team: 'Charlotte Hornets' },
  'Patrick Williams': { name: 'Patrick Williams', position: 'G', team: 'Chicago Bulls' },
  'Robert Williams': { name: 'Robert Williams', position: 'PF', team: 'Boston Celtics' },
  'Ziaire Williams': { name: 'Ziaire Williams', position: 'F', team: 'Memphis Grizzlies' },
  'Zion Williamson': {
    name: 'Zion Williamson',
    position: 'PF',
    team: 'New Orleans Pelicans'
  },
  'Dylan Windler': {
    name: 'Dylan Windler',
    position: 'SF',
    team: 'Cleveland Cavaliers'
  },
  'Justise Winslow': {
    name: 'Justise Winslow',
    position: 'SF',
    team: 'Portland Trail Blazers'
  },
  'James Wiseman': {
    name: 'James Wiseman',
    position: 'C',
    team: 'Golden State Warriors'
  },
  'Christian Wood': { name: 'Christian Wood', position: 'PF', team: 'Dallas Mavericks' },
  'McKinley Wright IV': {
    name: 'McKinley Wright IV',
    position: 'PG',
    team: 'Dallas Mavericks'
  },
  'Delon Wright': { name: 'Delon Wright', position: 'G', team: 'Washington Wizards' },
  'Thaddeus Young': { name: 'Thaddeus Young', position: 'F', team: 'Toronto Raptors' },
  'Trae Young': { name: 'Trae Young', position: 'PG', team: 'Atlanta Hawks' },
  'Omer Yurtseven': { name: 'Omer Yurtseven', position: 'C', team: 'Miami Heat' },
  'Ivica Zubac': { name: 'Ivica Zubac', position: 'C', team: 'Los Angeles Clippers' }
}
