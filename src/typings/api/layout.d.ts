import { YapiGetV1HomeColumnGetData } from "../yapi/HomeColumnGetListV1GetApi";
import { YapiGetV1HomeWebsiteGetData } from "../yapi/HomeWebsiteGetDataV1GetApi";

export type TlayoutProps = YapiGetV1HomeWebsiteGetData & Partial<YapiGetV1HomeColumnGetData>