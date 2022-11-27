import ATL from './NBA Logos/ATL.png'
import BKN from './NBA Logos/BKN.png'
import BOS from './NBA Logos/BOS.png'
import CHA from './NBA Logos/CHA.png'
import CHI from './NBA Logos/CHI.png'
import CLE from './NBA Logos/CLE.png'
import DAL from './NBA Logos/DAL.png'
import DEN from './NBA Logos/DEN.png'
import DET from './NBA Logos/DET.png'
import GSW from './NBA Logos/GSW.png'
import HOU from './NBA Logos/HOU.png'
import IND from './NBA Logos/IND.png'
import LAC from './NBA Logos/LAC.png'
import LAL from './NBA Logos/LAL.png'
import MEM from './NBA Logos/MEM.png'
import MIA from './NBA Logos/MIA.png'
import MIL from './NBA Logos/MIL.png'
import MIN from './NBA Logos/MIN.png'
import NOP from './NBA Logos/NOP.png'
import NYK from './NBA Logos/NYK.png'
import OKC from './NBA Logos/OKC.png'
import ORL from './NBA Logos/ORL.png'
import PHI from './NBA Logos/PHI.png'
import PHX from './NBA Logos/PHX.png'
import POR from './NBA Logos/POR.png'
import SAC from './NBA Logos/SAC.png'
import SAS from './NBA Logos/SAS.png'
import TOR from './NBA Logos/TOR.png'
import UTA from './NBA Logos/UTA.png'
import WAS from './NBA Logos/WAS.png'

function PlayerLogo(team) {
  let res;
  switch(team) {
    case "ATL":
      res = <img className='teamLogo' src={ATL}/>
      break
    case "BKN":
      res = <img className='teamLogo' src={BKN}/>
      break
    case "BOS":
      res = <img className='teamLogo' src={BOS}/>
      break
    case "CHA":
      res = <img className='teamLogo' src={CHA}/>
      break
    case "CHI":
      res = <img className='teamLogo' src={CHI}/>
      break
    case "CLE":
      res = <img className='teamLogo' src={CLE}/>
      break
    case "DAL":
      res = <img className='teamLogo' src={DAL}/>
      break
    case "DEN":
      res = <img className='teamLogo' src={DEN}/>
      break
    case "DET":
      res = <img className='teamLogo' src={DET}/>
      break
    case "GSW":
      res = <img className='teamLogo' src={GSW}/>
      break
    case "HOU":
      res = <img className='teamLogo' src={HOU}/>
      break
    case "IND":
      res = <img className='teamLogo' src={IND}/>
      break
    case "LAC":
      res = <img className='teamLogo' src={LAC}/>
      break
    case "LAL":
      res = <img className='teamLogo'  src={LAL}/>
      break
    case "MEM":
      res = <img className='teamLogo' src={MEM}/>
      break
    case "MIA":
      res = <img className='teamLogo' src={MIA}/>
      break
    case "MIL":
      res = <img className='teamLogo' src={MIL}/>
      break
    case "MIN":
      res = <img className='teamLogo' src={MIN}/>
      break
    case "NOP":
      res = <img className='teamLogo' src={NOP}/>
      break
    case "NYK":
      res = <img className='teamLogo' src={NYK}/>
      break
    case "OKC":
      res = <img className='teamLogo' src={OKC}/>
      break
    case "ORL":
      res = <img className='teamLogo' src={ORL}/>
      break
    case "PHI":
      res = <img className='teamLogo' src={PHI}/>
      break
    case "PHX":
      res = <img className='teamLogo' src={PHX}/>
      break
    case "POR":
      res = <img className='teamLogo' src={POR}/>
      break
    case "SAC":
      res = <img className='teamLogo' src={SAC}/>
      break
    case "SAS":
      res = <img className='teamLogo' src={SAS}/>
      break
    case "TOR":
      res = <img className='teamLogo' src={TOR}/>
      break
    case "UTA":
      res = <img className='teamLogo' src={UTA}/>
      break
    case "WAS":
      res = <img className='teamLogo' src={WAS}/>
      break
  }
  return res
}


export default PlayerLogo
