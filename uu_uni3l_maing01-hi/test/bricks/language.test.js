import UU5 from "uu5g04";
import UuUni3l from "uu_uni3l_maing01-hi";

const { shallow } = UU5.Test.Tools;

describe(`UuUni3l.Bricks.Language`, () => {
  it(`default props`, () => {
    const wrapper = shallow(<UuUni3l.Bricks.Language />);
    expect(wrapper).toMatchSnapshot();
  });
});
