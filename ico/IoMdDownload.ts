import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MdDownload icon from Ionicons 4
 * @module
 */
export function IoMdDownload(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M416 199.5h-91.4V64H187.4v135.5H96l160 158.1 160-158.1zM96 402.8V448h320v-45.2H96z"}}]})(props);
}
export default IoMdDownload;
