export function Ripple({ duration = 850, color = "#ffffff" }) {
  const [rippleArray, setRippleArray] = React.useState([]);

  React.useEffect(() => {
    let bounce =  undefined;

    if (rippleArray.length > 0) {
      window.clearTimeout(bounce);

      bounce = window.setTimeout(() => {
        setRippleArray([]);
        window.clearTimeout(bounce);
      }, duration * 4);
    }

    return () => window.clearTimeout(bounce);
  }, [rippleArray.length, duration]);

  const addRipple = (event) => {
    const rippleContainer = event.currentTarget.getBoundingClientRect();
    const size =
      rippleContainer.width > rippleContainer.height
        ? rippleContainer.width
        : rippleContainer.height;
    const x = event.pageX - rippleContainer.left - size / 2;
    const y = event.pageY - rippleContainer.top - size / 2;

    // объект со свойствами x, y и size, которые являются информацией, необходимой для стилизации ряби
    const newRipple = {
      x,
      y,
      size
    };

    setRippleArray([...rippleArray, newRipple]);
  };

  return (
    <RippleContainer duration={duration} color={color} onMouseDown={addRipple}>
      {rippleArray.length > 0 &&
        rippleArray.map((ripple, index) => {
          return (
            <span
              key={"span" + index}
              style={{
                top: ripple.y,
                left: ripple.x,
                width: ripple.size,
                height: ripple.size
              }}
            />
          );
        })}
    </RippleContainer>
  );
}