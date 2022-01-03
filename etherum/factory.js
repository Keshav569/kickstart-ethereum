import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x6bAB1996B52C6D003572446356c31Ae7B3a36A6B'
);

export default instance;
