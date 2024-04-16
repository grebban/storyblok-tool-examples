import Migration from "./src/index.js"

const paToken = import.meta.env.VITE_PERSONAL_ACCESS_TOKEN;
const sourceSpaceId = import.meta.env.VITE_SOURCE_SPACE_ID;
const targetSpaceId = import.meta.env.VITE_TARGET_SPACE_ID;
const simultaneousUploads = import.meta.env.VITE_SIMULTANEOUS_UPLOADS;
const sourceSpaceRegion = import.meta.env.VITE_SOURCE_SPACE_REGION;
const targetSpaceRegion = import.meta.env.VITE_TARGET_SPACE_REGION;
const clearSource = import.meta.env.VITE_CLEAR_SOURCE?.toLowerCase() === "true";
const detectImageSize = import.meta.env.VITE_DETECT_IMAGE_SIZE?.toLowerCase() === "true";
const usedAssetsOnly = import.meta.env.VITE_USED_ASSETS_ONLY?.toLowerCase() === "true";
const duplicateFolders = import.meta.env.VITE_DUPLICATE_FOLDERS?.toLowerCase() === "true";

const migration = new Migration(paToken, sourceSpaceId, targetSpaceId, simultaneousUploads, sourceSpaceRegion, targetSpaceRegion, clearSource, detectImageSize, usedAssetsOnly, duplicateFolders)
migration.start()