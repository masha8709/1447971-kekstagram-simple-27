import {isEscapeKey} from './util.js';
import { resetScale } from './scale-img.js';

//Загрузка изображения

const form = document.querySelector('.img-upload__form');
const openUploadFileButton = form.querySelector('.img-upload__input');
const closeUploaFiledButton = form.querySelector('.img-upload__cancel');
const imgUploadOverlay = form.querySelector('.img-upload__overlay');
const commentField = document.querySelector('.text__description');

const isTextFocused = () => document.activeElement === commentField;

const onUploadFilEscKeyDown = (evt) => {
  if (isEscapeKey(evt) && !isTextFocused()) {
    evt.preventDefault();
    closeUploadFile();
    document.removeEventListener('keydown', onUploadFilEscKeyDown);
  }
};

function openUploadFile() {
  imgUploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onUploadFilEscKeyDown);
}

function closeUploadFile() {
  resetScale();
  imgUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onUploadFilEscKeyDown);
}

openUploadFileButton.addEventListener('change', () => openUploadFile());

closeUploaFiledButton.addEventListener('click', () => closeUploadFile());
