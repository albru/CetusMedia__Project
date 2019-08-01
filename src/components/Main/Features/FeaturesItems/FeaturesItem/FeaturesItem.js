import React from 'react';

const featuresItem = props => {
    const featuresData = [
        {
            desc: 'Изготовление наружной рекламы происходит на нашем собственном производстве. У нас присутствует весь парк необходимого оборудования.',
            img: 'img'
        },
        {
            desc: 'Предоставляем гарантию на произведенную продукцию до трёх лет с момента сдачи (монтажа) заказа клиенту',
            img: 'img'
        },
        {
            desc: 'Все новые изготовленные рекламные конструкции и вывески в нашей компании сначала демонстрируются директору - и только потом отправляются заказчику и монтируются - данная процедура позволяет всегда удерживать качество производимой продукции на высоте',
            img: 'img'
        },
        {
            desc: 'Посмотрев наше Портфолио, Вы убедитесь в наличии огромного опыта, полученного при производстве и установке различных рекламных конструкций, наружных и интерьерных вывесок, а также получение согласований в КГА и КГИОП на размещение информационных объектов',
            img: 'img'
        }
    ];

    return featuresData.map((item, index) => {
        return (
            <li>
                <div>
                    <img src="" alt=''></img>
                </div>
                <div>
                    <p>{item.desc}</p>
                </div>
            </li>
        )
    });
};

export default featuresItem;