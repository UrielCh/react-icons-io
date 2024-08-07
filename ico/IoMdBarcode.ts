import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MdBarcode icon from Ionicons 4
 * @module
 */
export function IoMdBarcode(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M88 128h48v256H88zM232 128h48v256h-48zM160 144h48v224h-48zM304 144h48v224h-48zM376 128h48v256h-48z"}},{tag:"path",attr:{d:"M104 104V56H16v400h88v-48H64V104zM408 56v48h40v304h-40v48h88V56z"},child:[]}]})(props);
}
export default IoMdBarcode;
