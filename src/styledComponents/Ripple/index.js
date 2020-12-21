import React from 'react';
/*
 * for container must have: overflow: hidden and position: relative
 <Button>
    Learn React
    <Ripple duration={3000} color="yellow" />
  </Button>
 */
import { RippleContainer } from "./style";


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
    //Element.getBoundingClientRect() возвращает размер элемента и его позицию относительно viewport 
    // rippleContainer = {x: 38.5, y: 192.1, width: 168.9, height: 33.2, top: 192.1…}
    const rippleContainer = event.currentTarget.getBoundingClientRect();
    // *** Выбираем самую длинную сторону ***
    // height width - реальные размеры элемента
    const size =
      rippleContainer.width > rippleContainer.height
        ? rippleContainer.width
        : rippleContainer.height;
    // *** Координаты щелчка мыши ***
    //MouseEvent.pageX - это свойство MouseEvent доступное только для чтения. Данное свойство возвращает значение равное горизонтальной координате, относительно всего(!) документа
    //rippleContainer.left тоже что rippleContainer.x
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