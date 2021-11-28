//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "Numbers",
  nestingLevel: "bigBoxCollection",
  //@@viewOff:statics
};

export const Numbers = createVisualComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return (
      <div>
        <h2>Numbers</h2>
        <p>
          <UU5.Bricks.Number value={200} />
        </p>
        <p>
          <UU5.Bricks.Number thousandSeparator={" "} value={1400000} />
        </p>
        <p>
          <UU5.Bricks.Number decimalSeparator={","} value={50.123456} maxDecimalLength={5} />
        </p>
      </div>
    );
    //@@viewOff:render
  },
});

export default Numbers;
