import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Projects from './components/Projects';
import Reviews from './components/Reviews';
import Form from './components/Form';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header menuItems={[{ title: "Home", href: "/" }, { title: "About", href: "/about" }, { title: "Services", href: "/Services" }, { title: "Blog", href: "/blog" }]} phoneNumber="+7 999 999 99 99" />
      <Hero
        title="Эксклюзивная и нестандартная мебель для дома"
        buttonText="Заказать проект"
        text="Мы можем произвести любую мебель для вашего проекта и найти производственное решение любой задумки."
        smallImage="./assets/hero-image-1.jpg"
        bigImage="./assets/hero-image-2.jpg"
      />
      <About
        title="Более 5 лет создаем мебель для вашего комфорта"
        paragraphs={[
          "Мы — команда профессионалов, которые могут произвести любую мебель для вашего проекта, а также найти производственное решение любой задумки.",
          "Наша основная цель — реализовывать самые смелые задумки, и делать это качественно и аккуратно.",
          "В качестве материалов мы используем натуральные — стекло, дерево, бетон, камень, металл и эпоксидную смолу."
        ]}
        subtextItems={[
          { subtitle: "1 год", text: "гарантии на всю продукцию" },
          { subtitle: "300+", text: "выполненных проектов" },
          { subtitle: "15 дней", text: "срок производства" }
        ]}
      />
      <Work
        title="Как мы работаем"
        description="Алгоритм работы с нами для удобства и понимания проекта"
        workTableItems={[
          { title: "Идея", text: "Клиент приходит к нам с идеей. Это может быть изображение/ эскиз или другой референс. А мы думаем над тем, как это реализовать, делаем технические чертежи и предлагаем решения по материалам." },
          { title: "Техническое задание", text: "Вместе с клиентом формулируем корректное ТЗ, которое включает в себя визуализацию изделия, эскизный чертёж с габаритами, информацию по материалам и отделке, срок реализации проекта и другие обязательные пункты." },
          { title: "Коммерческое предложение", text: "Предпочтительно используем натуральные материалы. Но любую смету можем оптимизировать, упростив материалы или конструктив. Сможем подстроиться под бюджет клиента и согласуем коммерческое предложение" },
          { title: "Подготовка рабочего проекта", text: "Создадим рабочую документацию и чертежи. Это фундамент качественного производства. На этом этапе утверждаем с клиентом все габариты и материалы, чертежи и приступаем к производству." },
          { title: "Производство и монтаж", text: "Производство занимает от 15 рабочих дней, в зависимости от сложности и объёма. Монтажом тоже занимаемся самостоятельно. Ведь мы это сделаем быстро и аккуратно." },
        ]}
      />

      <Projects
        title="Проекты"
        images={[
          { src: "assets/project-1.jpg", alt: "project-1" },
          { src: "assets/project-2.jpg", alt: "project-2" },
          { src: "assets/project-3.jpg", alt: "project-3" },
          { src: "assets/project-4.jpg", alt: "project-4" },
          { src: "assets/project-5.jpg", alt: "project-5" },
          { src: "assets/project-6.jpg", alt: "project-6" }
        ]}
      />

      <Reviews
        title="Отзывы"
        reviews={[
          { name: "Игорь Антонов", text: "Спасибо за проект! Все сделали быстро и качественно...", image: "assets/review.svg" },
          { name: "Ольга Иванова", text: "После пары заказов у компании Aveji убедилась...", image: "assets/review.svg" },
          { name: "Аркадий Макаров", text: "Aveji — настоящие профессионалы своего дела...", image: "assets/review.svg" }
        ]}
      />

      <Form
        title="Остались вопросы?"
        description="Оставьте заявку, и мы вам перезвоним"
        formImage="assets/form-image.jpg"
        appstoreImage="assets/appstore.svg"
        playstoreImage="assets/playstore.svg"
      />
      
      <Footer/>
    </div>
  );
}

export default App;
