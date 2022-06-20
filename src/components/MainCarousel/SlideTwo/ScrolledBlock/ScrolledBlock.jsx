import { useEffect, useRef, useState } from 'react';
import { CustomScroll } from './CustomScroll/CustomScroll';
import './styles.scss';

export const ScrolledBlock = () => {
  const [textHeight, setTextHeight] = useState(0);
  const [textParentHeight, setTextParentHeight] = useState(0);
  const [textScrolling, setTextScrolling] = useState(0);

  const textRef = useRef();

  useEffect(() => {
    const textH = textRef.current.clientHeight;
    setTextHeight(textH);

    const textParentH = textRef.current.parentElement.clientHeight;
    setTextParentHeight(textParentH);
  }, []);

  useEffect(() => {
    const offset = -((textHeight - textParentHeight) / 100 * textScrolling);
    textRef.current.style.transform = `translateY(${offset}px)`;
  }, [textScrolling]);

  return (
    <div className="scrolled-block">
      <CustomScroll handleTextScrolling={setTextScrolling} />
      <div className="block">
        <div className="scrolled-block__container">
          <p className="scrolled-block__text" ref={textRef} >
            <b>Lorem ipsum dolor sit amet, consectetur </b>. Nulla earum iusto vel, eius neque eum reiciendis quas assumenda corporis, ex quisquam qui fuga non vitae, ea quaerat id officiis nobis odit rerum. Delectus facere quae dicta vero hic? Amet voluptatum veniam nesciunt reprehenderit dolore odio consequuntur vero eius! Impedit distinctio culpa dolore facilis! Reiciendis delectus sequi dolore ad consequatur maxime aliquid, nam asperiores ratione voluptatem exercitationem unde rerum impedit. Eligendi, cumque accusamus deserunt nemo provident odio consequuntur voluptate perspiciatis consequatur in, quae sed doloremque maiores minima tenetur sit non molestiae corporis error? At laboriosam reiciendis aperiam asperiores, nobis perferendis voluptates fugit, tenetur recusandae, quis illo cupiditate minima blanditiis earum et doloremque libero? Explicabo excepturi, animi officiis, nisi repellat eius placeat, sequi molestiae voluptatem fuga voluptatibus tempore distinctio possimus impedit fugiat! Eum unde ratione natus et expedita reprehenderit exercitationem voluptatum ipsam reiciendis ipsa rem iste, aspernatur, ullam temporibus? Provident nisi eaque architecto. Quae officia, perspiciatis porro facere explicabo laboriosam, enim et, id perferendis cumque libero praesentium? Nulla, fuga illo beatae, illum nobis optio necessitatibus aliquam hic consectetur quis, quo rerum? Mollitia illum expedita, veniam quis distinctio fuga repellendus blanditiis, laborum, laudantium impedit qui tempora iste nemo? Eos dicta perspiciatis velit iusto fugiat! In autem voluptatibus esse suscipit tenetur sed, minima dignissimos consequatur. Quae doloremque voluptatum quam asperiores, modi harum adipisci autem odio recusandae ab. Quasi nemo eius necessitatibus ut fugit facere corporis tempore exercitationem placeat, magni temporibus fuga veniam consectetur eum ab officia praesentium voluptatem provident odio, quisquam maiores sint veritatis. Sint suscipit deleniti, corporis consequatur voluptates a accusamus perspiciatis hic numquam itaque eum excepturi vitae voluptate distinctio officia nesciunt error eius aliquid aliquam nulla ratione mollitia non. Dolor libero alias quo, molestias repudiandae magni aperiam non odit quisquam sunt velit minus voluptas atque ipsam quaerat deleniti repellat debitis sint deserunt doloribus neque asperiores modi voluptatibus. Non blanditiis officiis, illo dolorum odit incidunt beatae ipsa ab nobis vitae cupiditate doloremque soluta iste quibusdam facilis placeat reprehenderit suscipit, ea eaque temporibus expedita sunt nisi nihil. Perspiciatis laboriosam nesciunt laudantium? Itaque ratione dignissimos culpa illo harum qui, a omnis numquam ipsum deserunt. Veritatis a quo quaerat officiis voluptatem, ex ad, velit omnis ratione accusamus quam. Quod provident mollitia, illum ullam doloremque, iste repudiandae dicta fuga fugit quis vero veniam sequi quos quae velit suscipit culpa minus! Itaque a facere, qui optio architecto et soluta necessitatibus tempora, placeat, voluptas quis voluptatum fuga expedita dolore perspiciatis modi aliquam nihil veritatis omnis. Repellendus omnis ipsum hic aut ducimus, ab veritatis architecto aliquam vero in, odit voluptatem provident expedita neque asperiores officia voluptas exercitationem facere voluptates corrupti dicta ipsam ea voluptatum beatae! Animi fuga delectus unde culpa nobis asperiores nostrum corporis repudiandae. Aliquid suscipit omnis nesciunt quae. Nihil architecto delectus quidem expedita eligendi placeat odio voluptate eum nulla unde! Ipsam ad dicta magnam, reprehenderit porro sit quaerat omnis aliquam esse, adipisci aut laborum nulla iste? Repellat amet laborum hic quam unde praesentium dignissimos sunt doloribus nemo, qui odit numquam quibusdam porro earum nesciunt cupiditate ullam deleniti deserunt?
          </p>
        </div>
      </div>
    </div>
  )
}
