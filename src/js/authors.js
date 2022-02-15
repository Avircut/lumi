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
  new Author(lumigate, 'Вячеслав Ломов', 'Avircut', 'Разработчик', 'Кайфово делаем, на чилле на расслабоне, туда кнопочку, туда строчку, туда блочок, хоп-хоп и сайт готов. \n\n Могу ебнуть на пангольере катку в дотке, если интересно. Если не интересно могу уебать вам, мне не принципиально.')];
export default Authors;
