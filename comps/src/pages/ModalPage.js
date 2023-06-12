import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";


function ModalPage(){

    const [showModal,setShowModal] = useState(false);

    const handleClick = ()=>{
        setShowModal(true);
    };

    const handleClose = ()=>{
        setShowModal(false);
    }

    const actionBar = <div>
        <Button onClick={handleClose} primary>I accept</Button>
    </div>

    const modal =  <Modal onClose={handleClose} actionBar={actionBar}>
        <p>this is agreement you need to accept</p>
    </Modal>

    return (
    <div>
        <Button onClick={handleClick} primary>Open Modal</Button>
        {showModal && modal}
        
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet arcu ipsum. Quisque id erat dapibus, bibendum enim a, rutrum sapien. Quisque malesuada metus eget lectus porta, ut pharetra sem pellentesque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus ac metus felis. Suspendisse molestie non ante ac feugiat. Morbi tristique molestie nisl vel pharetra. Duis ornare, quam ut lobortis rutrum, magna ligula aliquam est, ac eleifend purus lectus nec nulla. Donec convallis iaculis ex, sed fringilla nunc accumsan quis. Quisque ultrices auctor ex, eget accumsan nunc commodo a. Vestibulum mauris nisl, convallis et ornare nec, dignissim ac diam. Etiam risus arcu, interdum eget eleifend at, lacinia pellentesque orci. Ut pretium diam non arcu egestas bibendum.
           Vivamus ligula orci, malesuada ac lacinia id, fringilla in erat. Nullam vehicula id est nec pretium. Maecenas sit amet est maximus, lacinia libero eu, suscipit neque. Pellentesque in eros nec quam lobortis dapibus sed nec leo. Vestibulum suscipit condimentum commodo. Sed elementum quis eros et porttitor. Nulla facilisi. Nunc quis sem efficitur, bibendum nibh id, consequat metus.
           Morbi et massa nisl. Pellentesque ac odio nec ante viverra accumsan vitae eget lectus. Suspendisse at tellus nisl. Mauris ac purus mi. Vestibulum tincidunt dui id ipsum suscipit mattis. Nullam sed odio vehicula, accumsan sapien non, euismod ligula. Sed aliquet mollis faucibus. Mauris lorem neque, semper a neque id, consequat porttitor nisi.
           Morbi hendrerit tincidunt felis viverra venenatis. Pellentesque at tincidunt nibh, et congue elit. Nulla eu dui lectus. Nulla gravida eget dolor ut consequat. Aenean mi eros, gravida vel luctus in, mattis quis ipsum. Integer vitae dignissim lacus, ac tempor lacus. Quisque in ullamcorper eros. Vestibulum quis tellus a leo sagittis rutrum. Mauris varius auctor arcu, et pellentesque felis feugiat ac. Donec elit eros, hendrerit ullamcorper mauris quis, semper mollis odio. Aliquam eu imperdiet nisl. Nam congue semper sapien quis iaculis. Sed interdum id massa ac faucibus.
           Maecenas dignissim convallis elit, at euismod nisl viverra et. Donec interdum aliquet blandit. Donec ut turpis iaculis, ornare dolor sollicitudin, eleifend neque. In sit amet enim id justo imperdiet scelerisque. Nullam vestibulum, nulla eu sodales dignissim, erat lacus lacinia nibh, ut tincidunt eros elit a tortor. Sed elementum, sapien et euismod semper, lectus justo luctus massa, a tristique nisi mi a nisl. Curabitur eget dapibus metus. Ut quis gravida risus. Aenean nisl arcu, interdum accumsan cursus et, tincidunt vitae neque. Proin ac tristique erat. Aenean fermentum elit tincidunt sapien egestas, ac vulputate erat mattis. Cras at volutpat ante. Integer non elit in est aliquet volutpat. Quisque quis magna eros.
        </p>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet arcu ipsum. Quisque id erat dapibus, bibendum enim a, rutrum sapien. Quisque malesuada metus eget lectus porta, ut pharetra sem pellentesque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus ac metus felis. Suspendisse molestie non ante ac feugiat. Morbi tristique molestie nisl vel pharetra. Duis ornare, quam ut lobortis rutrum, magna ligula aliquam est, ac eleifend purus lectus nec nulla. Donec convallis iaculis ex, sed fringilla nunc accumsan quis. Quisque ultrices auctor ex, eget accumsan nunc commodo a. Vestibulum mauris nisl, convallis et ornare nec, dignissim ac diam. Etiam risus arcu, interdum eget eleifend at, lacinia pellentesque orci. Ut pretium diam non arcu egestas bibendum.
           Vivamus ligula orci, malesuada ac lacinia id, fringilla in erat. Nullam vehicula id est nec pretium. Maecenas sit amet est maximus, lacinia libero eu, suscipit neque. Pellentesque in eros nec quam lobortis dapibus sed nec leo. Vestibulum suscipit condimentum commodo. Sed elementum quis eros et porttitor. Nulla facilisi. Nunc quis sem efficitur, bibendum nibh id, consequat metus.
           Morbi et massa nisl. Pellentesque ac odio nec ante viverra accumsan vitae eget lectus. Suspendisse at tellus nisl. Mauris ac purus mi. Vestibulum tincidunt dui id ipsum suscipit mattis. Nullam sed odio vehicula, accumsan sapien non, euismod ligula. Sed aliquet mollis faucibus. Mauris lorem neque, semper a neque id, consequat porttitor nisi.
           Morbi hendrerit tincidunt felis viverra venenatis. Pellentesque at tincidunt nibh, et congue elit. Nulla eu dui lectus. Nulla gravida eget dolor ut consequat. Aenean mi eros, gravida vel luctus in, mattis quis ipsum. Integer vitae dignissim lacus, ac tempor lacus. Quisque in ullamcorper eros. Vestibulum quis tellus a leo sagittis rutrum. Mauris varius auctor arcu, et pellentesque felis feugiat ac. Donec elit eros, hendrerit ullamcorper mauris quis, semper mollis odio. Aliquam eu imperdiet nisl. Nam congue semper sapien quis iaculis. Sed interdum id massa ac faucibus.
           Maecenas dignissim convallis elit, at euismod nisl viverra et. Donec interdum aliquet blandit. Donec ut turpis iaculis, ornare dolor sollicitudin, eleifend neque. In sit amet enim id justo imperdiet scelerisque. Nullam vestibulum, nulla eu sodales dignissim, erat lacus lacinia nibh, ut tincidunt eros elit a tortor. Sed elementum, sapien et euismod semper, lectus justo luctus massa, a tristique nisi mi a nisl. Curabitur eget dapibus metus. Ut quis gravida risus. Aenean nisl arcu, interdum accumsan cursus et, tincidunt vitae neque. Proin ac tristique erat. Aenean fermentum elit tincidunt sapien egestas, ac vulputate erat mattis. Cras at volutpat ante. Integer non elit in est aliquet volutpat. Quisque quis magna eros.
        </p>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet arcu ipsum. Quisque id erat dapibus, bibendum enim a, rutrum sapien. Quisque malesuada metus eget lectus porta, ut pharetra sem pellentesque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus ac metus felis. Suspendisse molestie non ante ac feugiat. Morbi tristique molestie nisl vel pharetra. Duis ornare, quam ut lobortis rutrum, magna ligula aliquam est, ac eleifend purus lectus nec nulla. Donec convallis iaculis ex, sed fringilla nunc accumsan quis. Quisque ultrices auctor ex, eget accumsan nunc commodo a. Vestibulum mauris nisl, convallis et ornare nec, dignissim ac diam. Etiam risus arcu, interdum eget eleifend at, lacinia pellentesque orci. Ut pretium diam non arcu egestas bibendum.
           Vivamus ligula orci, malesuada ac lacinia id, fringilla in erat. Nullam vehicula id est nec pretium. Maecenas sit amet est maximus, lacinia libero eu, suscipit neque. Pellentesque in eros nec quam lobortis dapibus sed nec leo. Vestibulum suscipit condimentum commodo. Sed elementum quis eros et porttitor. Nulla facilisi. Nunc quis sem efficitur, bibendum nibh id, consequat metus.
           Morbi et massa nisl. Pellentesque ac odio nec ante viverra accumsan vitae eget lectus. Suspendisse at tellus nisl. Mauris ac purus mi. Vestibulum tincidunt dui id ipsum suscipit mattis. Nullam sed odio vehicula, accumsan sapien non, euismod ligula. Sed aliquet mollis faucibus. Mauris lorem neque, semper a neque id, consequat porttitor nisi.
           Morbi hendrerit tincidunt felis viverra venenatis. Pellentesque at tincidunt nibh, et congue elit. Nulla eu dui lectus. Nulla gravida eget dolor ut consequat. Aenean mi eros, gravida vel luctus in, mattis quis ipsum. Integer vitae dignissim lacus, ac tempor lacus. Quisque in ullamcorper eros. Vestibulum quis tellus a leo sagittis rutrum. Mauris varius auctor arcu, et pellentesque felis feugiat ac. Donec elit eros, hendrerit ullamcorper mauris quis, semper mollis odio. Aliquam eu imperdiet nisl. Nam congue semper sapien quis iaculis. Sed interdum id massa ac faucibus.
           Maecenas dignissim convallis elit, at euismod nisl viverra et. Donec interdum aliquet blandit. Donec ut turpis iaculis, ornare dolor sollicitudin, eleifend neque. In sit amet enim id justo imperdiet scelerisque. Nullam vestibulum, nulla eu sodales dignissim, erat lacus lacinia nibh, ut tincidunt eros elit a tortor. Sed elementum, sapien et euismod semper, lectus justo luctus massa, a tristique nisi mi a nisl. Curabitur eget dapibus metus. Ut quis gravida risus. Aenean nisl arcu, interdum accumsan cursus et, tincidunt vitae neque. Proin ac tristique erat. Aenean fermentum elit tincidunt sapien egestas, ac vulputate erat mattis. Cras at volutpat ante. Integer non elit in est aliquet volutpat. Quisque quis magna eros.
        </p>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet arcu ipsum. Quisque id erat dapibus, bibendum enim a, rutrum sapien. Quisque malesuada metus eget lectus porta, ut pharetra sem pellentesque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus ac metus felis. Suspendisse molestie non ante ac feugiat. Morbi tristique molestie nisl vel pharetra. Duis ornare, quam ut lobortis rutrum, magna ligula aliquam est, ac eleifend purus lectus nec nulla. Donec convallis iaculis ex, sed fringilla nunc accumsan quis. Quisque ultrices auctor ex, eget accumsan nunc commodo a. Vestibulum mauris nisl, convallis et ornare nec, dignissim ac diam. Etiam risus arcu, interdum eget eleifend at, lacinia pellentesque orci. Ut pretium diam non arcu egestas bibendum.
           Vivamus ligula orci, malesuada ac lacinia id, fringilla in erat. Nullam vehicula id est nec pretium. Maecenas sit amet est maximus, lacinia libero eu, suscipit neque. Pellentesque in eros nec quam lobortis dapibus sed nec leo. Vestibulum suscipit condimentum commodo. Sed elementum quis eros et porttitor. Nulla facilisi. Nunc quis sem efficitur, bibendum nibh id, consequat metus.
           Morbi et massa nisl. Pellentesque ac odio nec ante viverra accumsan vitae eget lectus. Suspendisse at tellus nisl. Mauris ac purus mi. Vestibulum tincidunt dui id ipsum suscipit mattis. Nullam sed odio vehicula, accumsan sapien non, euismod ligula. Sed aliquet mollis faucibus. Mauris lorem neque, semper a neque id, consequat porttitor nisi.
           Morbi hendrerit tincidunt felis viverra venenatis. Pellentesque at tincidunt nibh, et congue elit. Nulla eu dui lectus. Nulla gravida eget dolor ut consequat. Aenean mi eros, gravida vel luctus in, mattis quis ipsum. Integer vitae dignissim lacus, ac tempor lacus. Quisque in ullamcorper eros. Vestibulum quis tellus a leo sagittis rutrum. Mauris varius auctor arcu, et pellentesque felis feugiat ac. Donec elit eros, hendrerit ullamcorper mauris quis, semper mollis odio. Aliquam eu imperdiet nisl. Nam congue semper sapien quis iaculis. Sed interdum id massa ac faucibus.
           Maecenas dignissim convallis elit, at euismod nisl viverra et. Donec interdum aliquet blandit. Donec ut turpis iaculis, ornare dolor sollicitudin, eleifend neque. In sit amet enim id justo imperdiet scelerisque. Nullam vestibulum, nulla eu sodales dignissim, erat lacus lacinia nibh, ut tincidunt eros elit a tortor. Sed elementum, sapien et euismod semper, lectus justo luctus massa, a tristique nisi mi a nisl. Curabitur eget dapibus metus. Ut quis gravida risus. Aenean nisl arcu, interdum accumsan cursus et, tincidunt vitae neque. Proin ac tristique erat. Aenean fermentum elit tincidunt sapien egestas, ac vulputate erat mattis. Cras at volutpat ante. Integer non elit in est aliquet volutpat. Quisque quis magna eros.
        </p>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet arcu ipsum. Quisque id erat dapibus, bibendum enim a, rutrum sapien. Quisque malesuada metus eget lectus porta, ut pharetra sem pellentesque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus ac metus felis. Suspendisse molestie non ante ac feugiat. Morbi tristique molestie nisl vel pharetra. Duis ornare, quam ut lobortis rutrum, magna ligula aliquam est, ac eleifend purus lectus nec nulla. Donec convallis iaculis ex, sed fringilla nunc accumsan quis. Quisque ultrices auctor ex, eget accumsan nunc commodo a. Vestibulum mauris nisl, convallis et ornare nec, dignissim ac diam. Etiam risus arcu, interdum eget eleifend at, lacinia pellentesque orci. Ut pretium diam non arcu egestas bibendum.
           Vivamus ligula orci, malesuada ac lacinia id, fringilla in erat. Nullam vehicula id est nec pretium. Maecenas sit amet est maximus, lacinia libero eu, suscipit neque. Pellentesque in eros nec quam lobortis dapibus sed nec leo. Vestibulum suscipit condimentum commodo. Sed elementum quis eros et porttitor. Nulla facilisi. Nunc quis sem efficitur, bibendum nibh id, consequat metus.
           Morbi et massa nisl. Pellentesque ac odio nec ante viverra accumsan vitae eget lectus. Suspendisse at tellus nisl. Mauris ac purus mi. Vestibulum tincidunt dui id ipsum suscipit mattis. Nullam sed odio vehicula, accumsan sapien non, euismod ligula. Sed aliquet mollis faucibus. Mauris lorem neque, semper a neque id, consequat porttitor nisi.
           Morbi hendrerit tincidunt felis viverra venenatis. Pellentesque at tincidunt nibh, et congue elit. Nulla eu dui lectus. Nulla gravida eget dolor ut consequat. Aenean mi eros, gravida vel luctus in, mattis quis ipsum. Integer vitae dignissim lacus, ac tempor lacus. Quisque in ullamcorper eros. Vestibulum quis tellus a leo sagittis rutrum. Mauris varius auctor arcu, et pellentesque felis feugiat ac. Donec elit eros, hendrerit ullamcorper mauris quis, semper mollis odio. Aliquam eu imperdiet nisl. Nam congue semper sapien quis iaculis. Sed interdum id massa ac faucibus.
           Maecenas dignissim convallis elit, at euismod nisl viverra et. Donec interdum aliquet blandit. Donec ut turpis iaculis, ornare dolor sollicitudin, eleifend neque. In sit amet enim id justo imperdiet scelerisque. Nullam vestibulum, nulla eu sodales dignissim, erat lacus lacinia nibh, ut tincidunt eros elit a tortor. Sed elementum, sapien et euismod semper, lectus justo luctus massa, a tristique nisi mi a nisl. Curabitur eget dapibus metus. Ut quis gravida risus. Aenean nisl arcu, interdum accumsan cursus et, tincidunt vitae neque. Proin ac tristique erat. Aenean fermentum elit tincidunt sapien egestas, ac vulputate erat mattis. Cras at volutpat ante. Integer non elit in est aliquet volutpat. Quisque quis magna eros.
        </p>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet arcu ipsum. Quisque id erat dapibus, bibendum enim a, rutrum sapien. Quisque malesuada metus eget lectus porta, ut pharetra sem pellentesque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus ac metus felis. Suspendisse molestie non ante ac feugiat. Morbi tristique molestie nisl vel pharetra. Duis ornare, quam ut lobortis rutrum, magna ligula aliquam est, ac eleifend purus lectus nec nulla. Donec convallis iaculis ex, sed fringilla nunc accumsan quis. Quisque ultrices auctor ex, eget accumsan nunc commodo a. Vestibulum mauris nisl, convallis et ornare nec, dignissim ac diam. Etiam risus arcu, interdum eget eleifend at, lacinia pellentesque orci. Ut pretium diam non arcu egestas bibendum.
           Vivamus ligula orci, malesuada ac lacinia id, fringilla in erat. Nullam vehicula id est nec pretium. Maecenas sit amet est maximus, lacinia libero eu, suscipit neque. Pellentesque in eros nec quam lobortis dapibus sed nec leo. Vestibulum suscipit condimentum commodo. Sed elementum quis eros et porttitor. Nulla facilisi. Nunc quis sem efficitur, bibendum nibh id, consequat metus.
           Morbi et massa nisl. Pellentesque ac odio nec ante viverra accumsan vitae eget lectus. Suspendisse at tellus nisl. Mauris ac purus mi. Vestibulum tincidunt dui id ipsum suscipit mattis. Nullam sed odio vehicula, accumsan sapien non, euismod ligula. Sed aliquet mollis faucibus. Mauris lorem neque, semper a neque id, consequat porttitor nisi.
           Morbi hendrerit tincidunt felis viverra venenatis. Pellentesque at tincidunt nibh, et congue elit. Nulla eu dui lectus. Nulla gravida eget dolor ut consequat. Aenean mi eros, gravida vel luctus in, mattis quis ipsum. Integer vitae dignissim lacus, ac tempor lacus. Quisque in ullamcorper eros. Vestibulum quis tellus a leo sagittis rutrum. Mauris varius auctor arcu, et pellentesque felis feugiat ac. Donec elit eros, hendrerit ullamcorper mauris quis, semper mollis odio. Aliquam eu imperdiet nisl. Nam congue semper sapien quis iaculis. Sed interdum id massa ac faucibus.
           Maecenas dignissim convallis elit, at euismod nisl viverra et. Donec interdum aliquet blandit. Donec ut turpis iaculis, ornare dolor sollicitudin, eleifend neque. In sit amet enim id justo imperdiet scelerisque. Nullam vestibulum, nulla eu sodales dignissim, erat lacus lacinia nibh, ut tincidunt eros elit a tortor. Sed elementum, sapien et euismod semper, lectus justo luctus massa, a tristique nisi mi a nisl. Curabitur eget dapibus metus. Ut quis gravida risus. Aenean nisl arcu, interdum accumsan cursus et, tincidunt vitae neque. Proin ac tristique erat. Aenean fermentum elit tincidunt sapien egestas, ac vulputate erat mattis. Cras at volutpat ante. Integer non elit in est aliquet volutpat. Quisque quis magna eros.
        </p>


    </div>
    );
}


export default ModalPage;