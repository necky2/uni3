//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
import { UuDate, UuDateTime } from "uu_i18ng01";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "Dates",
  nestingLevel: "bigBoxCollection",
  //@@viewOff:statics
};

export const Dates = createVisualComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const _getCurrentDay = () => {
      const now = new UuDate();
      return now.format("cs");
    };
    const _getCurrentDayTime = () => {
      const now = new UuDateTime();
      return now.format("cs");
    };
    const _getNextMonth = () => {
      const now = new UuDate();
      now.shiftMonth(1);
      return now.format("cs", { format: "MMMM" });
    };
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return (
      <div>
        <h2>UuDate</h2>
        <p>Dnešní den: {_getCurrentDay()}</p>
        <p>Dnešní datum a čas: {_getCurrentDayTime()}</p>
        <p>Následující měsíc: {_getNextMonth()}</p>
      </div>
    );
    //@@viewOff:render
  },
});

export default Dates;
