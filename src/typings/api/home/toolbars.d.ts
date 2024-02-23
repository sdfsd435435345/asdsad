import { formatToolsData } from "@/helper/home/toolbars";

type FormattedAllTools = ReturnType<typeof formatToolsData>

type FormattedTools = FormattedAllTools[0]['data']