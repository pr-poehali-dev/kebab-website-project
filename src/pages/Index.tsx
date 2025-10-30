import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const menuItems = [
  {
    name: "Хинкали",
    description: "Сочные грузинские пельмени с мясом и бульоном",
    price: "450₽",
    category: "Основные блюда",
    image: "https://cdn.poehali.dev/projects/f9f206f4-f5a4-4da7-bbf6-083204360568/files/d825320f-17dd-4cc9-8b77-c27fd7442a0e.jpg"
  },
  {
    name: "Шашлык из баранины",
    description: "Маринованная баранина на углях с луком и зеленью",
    price: "650₽",
    category: "Основные блюда",
    image: "https://cdn.poehali.dev/projects/f9f206f4-f5a4-4da7-bbf6-083204360568/files/88072fd8-3763-46b0-999f-b34c3153067e.jpg"
  },
  {
    name: "Хачапури по-аджарски",
    description: "Лодочка из теста с сыром, маслом и яйцом",
    price: "380₽",
    category: "Выпечка",
    image: "https://cdn.poehali.dev/projects/f9f206f4-f5a4-4da7-bbf6-083204360568/files/47155b35-638f-4052-b4fa-64c942a509fd.jpg"
  },
  {
    name: "Долма",
    description: "Виноградные листья с рисом и мясом",
    price: "420₽",
    category: "Основные блюда",
    image: "https://cdn.poehali.dev/projects/f9f206f4-f5a4-4da7-bbf6-083204360568/files/dd764cfa-66cc-452f-b00a-2121793389e5.jpg"
  },
  {
    name: "Люля-кебаб",
    description: "Рубленое мясо на шампуре с пряностями",
    price: "480₽",
    category: "Основные блюда",
    image: "https://cdn.poehali.dev/projects/f9f206f4-f5a4-4da7-bbf6-083204360568/files/22478254-9693-4578-8a5f-e568aa5165fe.jpg"
  },
  {
    name: "Плов",
    description: "Ароматный рис с бараниной, морковью и специями",
    price: "520₽",
    category: "Основные блюда",
    image: "https://cdn.poehali.dev/projects/f9f206f4-f5a4-4da7-bbf6-083204360568/files/43c51119-04a7-4add-817b-0eeab9202b86.jpg"
  },
  {
    name: "Лахмаджун",
    description: "Тонкая лепешка с мясным фаршем и овощами",
    price: "350₽",
    category: "Выпечка",
    image: "https://cdn.poehali.dev/projects/f9f206f4-f5a4-4da7-bbf6-083204360568/files/daccdab4-ccef-4300-bd1c-77c4c0d152d5.jpg"
  },
  {
    name: "Хумус",
    description: "Паштет из нута с кунжутной пастой и специями",
    price: "280₽",
    category: "Закуски",
    image: "https://cdn.poehali.dev/projects/f9f206f4-f5a4-4da7-bbf6-083204360568/files/1f4bbcee-7988-498b-bdb2-8290ada23d9c.jpg"
  },
  {
    name: "Мясное ассорти",
    description: "Шашлык, люля-кебаб и лаваш с зеленью",
    price: "890₽",
    category: "Основные блюда",
    image: "https://cdn.poehali.dev/projects/f9f206f4-f5a4-4da7-bbf6-083204360568/files/c55c42b8-c0ad-447e-a8cf-121d4d520f3e.jpg"
  },
  {
    name: "Пахлава",
    description: "Слоеное тесто с медом и орехами",
    price: "220₽",
    category: "Десерты",
    image: "https://cdn.poehali.dev/projects/f9f206f4-f5a4-4da7-bbf6-083204360568/files/22b8c1f0-43ea-44a1-8b98-c10ba99a1500.jpg"
  }
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-4xl">🏔️</span>
            <h1 className="text-3xl font-bold text-primary">Кебаб</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#menu" className="text-foreground hover:text-primary transition-colors">Меню</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">О нас</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="bg-accent hover:bg-accent/90">
            <Icon name="Phone" size={18} className="mr-2" />
            Забронировать
          </Button>
        </div>
      </header>

      <section className="relative bg-gradient-to-b from-secondary/20 to-background py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold text-primary mb-6 animate-fade-in">
              Вкус настоящего Кавказа
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in">
              Аутентичная кухня в уютной атмосфере домашнего тепла
            </p>
            <div className="flex gap-4 justify-center flex-wrap animate-fade-in">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                <Icon name="UtensilsCrossed" size={20} className="mr-2" />
                Посмотреть меню
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Icon name="MapPin" size={20} className="mr-2" />
                Как добраться
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      <section id="menu" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Наше меню</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Каждое блюдо готовится по традиционным рецептам из свежих продуктов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border overflow-hidden">
                {item.image && (
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                )}
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-semibold text-primary">{item.name}</h3>
                    <span className="text-xl font-bold text-accent">{item.price}</span>
                  </div>
                  <p className="text-sm text-accent/70 mb-2">{item.category}</p>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  <Button variant="outline" className="w-full mt-4 border-accent text-accent hover:bg-accent hover:text-white">
                    <Icon name="Plus" size={18} className="mr-2" />
                    Добавить
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 md:py-24 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">О ресторане</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-4">История нашей кухни</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Ресторан "Кебаб" — это место, где традиции Кавказа встречаются с современным комфортом. 
                  Мы используем только проверенные рецепты, передающиеся из поколения в поколение.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Наши повара — настоящие мастера кавказской кухни, которые вкладывают душу в каждое блюдо. 
                  Деревянные столы, натуральные материалы и уютная атмосфера создают ощущение домашнего тепла.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-6 text-center bg-card">
                  <div className="text-4xl mb-2">👨‍🍳</div>
                  <div className="text-3xl font-bold text-primary mb-1">15+</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </Card>
                <Card className="p-6 text-center bg-card">
                  <div className="text-4xl mb-2">🍽️</div>
                  <div className="text-3xl font-bold text-primary mb-1">50+</div>
                  <div className="text-sm text-muted-foreground">Блюд в меню</div>
                </Card>
                <Card className="p-6 text-center bg-card">
                  <div className="text-4xl mb-2">⭐</div>
                  <div className="text-3xl font-bold text-primary mb-1">4.9</div>
                  <div className="text-sm text-muted-foreground">Рейтинг</div>
                </Card>
                <Card className="p-6 text-center bg-card">
                  <div className="text-4xl mb-2">❤️</div>
                  <div className="text-3xl font-bold text-primary mb-1">10K+</div>
                  <div className="text-sm text-muted-foreground">Гостей</div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Контакты</h2>
              <p className="text-lg text-muted-foreground">Мы всегда рады видеть вас в нашем ресторане</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow bg-card">
                <Icon name="MapPin" size={32} className="mx-auto mb-4 text-accent" />
                <h3 className="font-semibold text-lg mb-2 text-primary">Адрес</h3>
                <p className="text-muted-foreground">ул. Горная, 25<br />Москва, 119991</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow bg-card">
                <Icon name="Phone" size={32} className="mx-auto mb-4 text-accent" />
                <h3 className="font-semibold text-lg mb-2 text-primary">Телефон</h3>
                <p className="text-muted-foreground">+7 (495) 123-45-67<br />Ежедневно 11:00 - 23:00</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow bg-card">
                <Icon name="Mail" size={32} className="mx-auto mb-4 text-accent" />
                <h3 className="font-semibold text-lg mb-2 text-primary">Email</h3>
                <p className="text-muted-foreground">info@kebab-restaurant.ru<br />Ответим в течение часа</p>
              </Card>
            </div>
            <div className="mt-12 text-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-12">
                <Icon name="Calendar" size={20} className="mr-2" />
                Забронировать столик
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-card/50 py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 Ресторан Кебаб. Вкус настоящего Кавказа.</p>
        </div>
      </footer>
    </div>
  );
}