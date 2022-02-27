import lumigate from '../images/lumigate.webp';

class Author {
  constructor(photo, name, nickname, profession, desc) {
    this.photo = photo;
    this.name = name;
    this.nickname = nickname;
    this.profession = profession;
    this.desc = desc;
  }
}
const Authors = [ // Сюда добавляем авторов
  new Author(lumigate, 'Вениамин Строганов', 'Lumigate', 'Аранжировщик | Саунд-дизайнер', 'Мультижанровый музыкант. Занимаюсь Ghost Production на крупнейшей площадке мира. Выпускаю музыку под псевдонимами "Lumigate" и "FAIL-NOT" (дуэт).\n\nОсновное предпочтение отдаю электронно-танцевальной музыке, а именно bass-музыке, также создаю саунд дизайн для брендов, рекламных и анимационных роликов.'),
  new Author(lumigate, 'Вячеслав Ломов', 'Avircut', 'Разработчик', 'Exercitation sint eiusmod elit ipsum aute dolor ex pariatur laborum aliquip. In est non quis magna reprehenderit deserunt qui fugiat excepteur culpa laboris enim. Aute sit nostrud magna dolor labore ad quis cillum laborum eiusmod non non non.')];
export default Authors;
