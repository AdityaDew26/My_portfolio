import React from "react";
import Slider from "react-slick";
import Client1 from '../Assets/client1.png';
import Client2 from '../Assets/client2.png';
import Client3 from '../Assets/client3.png';
import Client4 from '../Assets/client4.png';
import "./style.css"; // Your custom styles

const Clients = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return ( <
        section className = "clients-carousel" >
        <
        h2 > Our Clients < /h2> <
        Slider {...settings } >
        <
        div className = "client-logo" >
        <
        img src = { Client1 }
        alt = "Client 1" / >
        <
        p > Lorem ipsum dolor sit amet, consectetur adipisicing elit.Molestias voluptatem non natus illum, numquam tempora et dolore sapiente vitae dicta, commodi nostrum maxime nisi officia minus laboriosam dolores nesciunt atque! < /p> < /
        div > <
        div className = "client-logo" >
        <
        img src = { Client2 }
        alt = "https://www.corporatephotographerslondon.com/wp-content/uploads/2022/02/FRA-1699dark-sq.jpg" / >
        <
        p > Lorem ipsum dolor sit amet consectetur adipisicing elit.Officia veritatis facilis dolores magnam beatae illo velit, explicabo quod dicta, id saepe nostrum odit cupiditate debitis autem fuga obcaecati dignissimos sint. < /p> < /
        div > <
        div className = "client-logo" >
        <
        img src = { Client3 }
        alt = "Client 3" / >
        <
        p > Lorem ipsum dolor sit amet consectetur, adipisicing elit.Totam cumque deserunt esse ? Necessitatibus fuga neque doloremque officiis rem sunt in , inventore expedita itaque numquam cum laudantium incidunt qui maiores asperiores! < /p> < /
        div > <
        div className = "client-logo" >
        <
        img src = { Client4 }
        alt = "Client 4" / >
        <
        p > Lorem ipsum dolor sit amet consectetur adipisicing elit.Perferendis, impedit cum porro recusandae nobis quam excepturi dolor.Impedit exercitationem nulla, hic voluptas natus consequatur aliquam, quia, pariatur facilis harum tenetur. < /p> < /
        div > < /
        Slider > <
        /section>
    );
};

export default Clients;