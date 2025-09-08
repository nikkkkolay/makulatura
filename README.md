# Мини-магазин наклеек «Макулатура»

## Описание
Небольшое e-commerce приложение, созданное на **Next.js**, с современным интерфейсом и анимациями на **GSAP**.  
Проект демонстрирует базовую функциональность интернет-магазина: каталог товаров, корзину и форму обратной связи (с отправкой писем через **Nodemailer**).  

Продакшен-версия доступна по ссылке: [https://makulatura.website/](https://makulatura.website/)

### Особенности
- Каталог товаров с карточками  
- Отправка писем через Nodemailer
- Анимации и плавные переходы на GSAP
- Иконки через react-icons  
- Линтинг и автоформатирование (ESLint, Stylelint, Prettier)  

## Технологии
- **Next.js 15.3**  
- **React 19**  
- **GSAP + @gsap/react**  
- **Nodemailer**
- **React Icons**  
- **TypeScript 5**  
- **ESLint + Prettier + Stylelint**  

## Скрипты
```bash
# Запуск dev-сервера на порту 3030
npm run dev

# Сборка для продакшена
npm run build

# Запуск в продакшене
npm run start

# Линтинг JS
npm run lint

# Линтинг и автоисправление CSS
npm run lint:css

# Форматирование кода
npm run format
