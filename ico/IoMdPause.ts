import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MdPause icon from Ionicons 4
 * @module
 */
export function IoMdPause(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M96 448h106.7V64H96v384zM309.3 64v384H416V64H309.3z"}}]})(props);
}
export default IoMdPause;
