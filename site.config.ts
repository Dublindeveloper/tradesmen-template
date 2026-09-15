import type { TradeConfig } from './src/types/config';
import { electricianConfig } from './src/configs/electrician';
import { plumberConfig } from './src/configs/plumber';
import { contractorConfig } from './src/configs/contractor';

// Active preset key from environment or default to 'electrician'
const activePresetKey = (
  typeof process !== 'undefined' && process.env && process.env.TRADE_CONFIG
    ? process.env.TRADE_CONFIG.toLowerCase()
    : 'electrician'
);

const presets: Record<string, TradeConfig> = {
  electrician: electricianConfig,
  plumber: plumberConfig,
  contractor: contractorConfig,
};

export const siteConfig: TradeConfig = presets[activePresetKey] || electricianConfig;

export default siteConfig;
