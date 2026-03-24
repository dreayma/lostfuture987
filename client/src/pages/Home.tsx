/**
 * Home Page - Lost Future Website
 *
 * Design Philosophy: Minimalist black and white with serious typography
 * - Hero section with title and quote in square frame
 * - Search bar and "About" button with square borders
 * - Biography section with alternating image/text layout
 * - Support for background images
 * - Sharp corners, no borders or effects
 */

import { useState } from "react";

export default function Home() {
  // ============================================================================
  // ИНСТРУКЦИЯ: КАК ДОБАВИТЬ НОВЫЕ БИОГРАФИИ
  // ============================================================================
  // 1. Найдите массив "biographies" ниже
  // 2. Добавьте новый объект в конец массива со следующей структурой:
  //    {
  //      id: 5,                                    // Уникальный номер (должен быть больше предыдущего)
  //      name: "Имя человека",                    // Полное имя
  //      birthDate: "15.03.1990",                  // Дата рождения (в формате ДД.МММ.ГГГГ)
  //      deathDate: "20.03.2024",                  // Дата смерти (в формате ДД.МММ.ГГГГ)
  //      description: "Описание биографии...",     // Текст с информацией о человеке
  //      imageUrl: "/images/soldier-5.jpeg",       // Путь к картинке в папке public/images
  //    }
  // 3. Сохраните файл - новая биография появится на сайте автоматически
  // ============================================================================

  // Biography data - ДОБАВЛЯЙТЕ НОВЫЕ БИОГРАФИИ СЮДА
  // ИНСТРУКЦИЯ ПО ДОБАВЛЕНИЮ КАРТИНОК:
  // 1. Поместите картинку в папку: client/public/images/
  // 2. В поле imageUrl вставьте путь: "/images/имя-файла.jpeg"
  // 3. Картинка должна быть квадратной (одинаковая ширина и высота)
  const biographies = [
    {
      id: 1,
      name: "Шишенко Александр",
      birthDate: "07.07.2003",
      deathDate: "04.03.2024",
      description:
        "Коллектив и студенты ГБПОУ ЕТОТ выражают глубокие соболезнования родным и близким, в связи с гибелью Александра хотел стать фермером",
      imageUrl: "/images/soldier-1.jpeg", // Путь к картинке в папке public/images
    },
    {
      id: 2,
      name: "Рябов Андрей Васильевич",
      birthDate: "04.03.1994",
      deathDate: "13.01.2026",
      description:
        "Андрей был призван защищать Родину в сентябре 2022 года, служил наводчиком мотострелкового отделения. Он погиб 13 января 2026 года в районе населённого пункта Плехово Суджанского района Курской области. Хотел стать Ученым физиком",
      imageUrl: "/images/soldier-2.jpeg", // Путь к картинке в папке public/images
    },
    {
      id: 3,
      name: "Анатолий",
      birthDate: "11.03.2002",
      deathDate: "20.03.2024",
      description:
        "Родился Анатолий 11 февраля 2002 года в селе Майск, был единственным ребенком в семье, учился в Курумканской СОШ № 2, выпускник Могойтинского филиала Байкальского колледжа туризма и сервиса. Хотел стать Программистом",
      imageUrl: "/images/soldier-3.jpeg", // Путь к картинке в папке public/images
    },
    {
      id: 4,
      name: "Лавинишников Никита Владимирович",
      birthDate: "02.09.2000",
      deathDate: "14.08.2024",
      description:
        "Никита был скромным, отзывчивым, спокойным, справедливым и ответственным парнем. И когда Родина оказалась в опасности, принял решение - идти защищать! Он хотел вернуться домой, воспитывать сына, жить со своей семьёй",
      imageUrl: "/images/soldier-4.jpeg", // Путь к картинке в папке public/images
    },
  ];

  // Optional: Set background image for the entire page
  const backgroundImageUrl = "/images/background.jpg";

  // State for search
  const [searchQuery, setSearchQuery] = useState("");

  // Filter biographies based on search query
  // Поиск работает по: имени, датам рождения/смерти и описанию
  const filteredBiographies = biographies.filter(
    bio =>
      bio.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bio.birthDate.includes(searchQuery) ||
      bio.deathDate.includes(searchQuery) ||
      bio.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      className="min-h-screen bg-background text-foreground"
      style={{
        backgroundImage: backgroundImageUrl
          ? `url(${backgroundImageUrl})`
          : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Optional: Dark overlay for background image */}
      {backgroundImageUrl && (
        <div className="fixed inset-0 bg-black/80 pointer-events-none"></div>
      )}

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="hero-section min-h-screen flex items-center justify-center">
          <div className="container px-4 md:px-8">
            <div className="text-center">
              <h1
                className="text-6xl md:text-8xl font-bold mb-12 tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Потерянное будущее
              </h1>

              {/* Quote in Square Frame */}
              <div className="border-2 border-foreground p-8 md:p-12 max-w-3xl mx-auto">
                <p
                  className="text-lg md:text-xl text-foreground leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Кладбище мечт. Здесь собраны истории потерянных надежд и
                  забытых будущих. Проект постоянно обновляется с новыми
                  историями о потерянных возможностях и мечтах.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Search and About Section */}
        <section className="search-about-section bg-background py-16">
          <div className="container px-4 md:px-8">
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              {/* Search Bar */}
              <div className="w-full md:w-96">
                <input
                  type="text"
                  placeholder="Поиск по имени, дате или описанию..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 bg-background text-foreground border-2 border-foreground placeholder-gray-500 focus:outline-none"
                  style={{ fontFamily: "var(--font-body)" }}
                />
              </div>

              {/* About Button */}
              <button
                className="px-8 py-4 bg-background text-foreground border-2 border-foreground hover:bg-foreground hover:text-background transition-colors duration-200 whitespace-nowrap"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Подробнее
              </button>
            </div>
          </div>
        </section>

        {/* Biographies Section */}
        <section className="biographies-section bg-background py-24">
          <div className="container px-4 md:px-8">
            {/* Biography Items - Alternating Layout */}
            <div className="space-y-20">
              {filteredBiographies.length > 0 ? (
                filteredBiographies.map((bio, index) => {
                  const isEven = index % 2 === 0;

                  return (
                    <div
                      key={bio.id}
                      className={`biography-item-${bio.id} grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center`}
                    >
                      {/* Image Container - Strictly Square */}
                      <div
                        className={`image-container ${isEven ? "md:order-1" : "md:order-2"}`}
                      >
                        <div className="aspect-square bg-foreground overflow-hidden">
                          {bio.imageUrl ? (
                            <img
                              src={bio.imageUrl}
                              alt={bio.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-muted">
                              <span className="text-muted-foreground text-center px-4">
                                Изображение здесь
                              </span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Text Container */}
                      <div
                        className={`text-container ${isEven ? "md:order-2" : "md:order-1"}`}
                      >
                        {/* Birth and Death Dates */}
                        <p
                          className="text-sm md:text-base text-foreground mb-2"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {bio.birthDate} / {bio.deathDate}
                        </p>

                        {/* Name */}
                        <h3
                          className="text-3xl md:text-4xl font-bold mb-4"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {bio.name}
                        </h3>

                        {/* Description */}
                        <p
                          className="text-lg md:text-xl text-foreground leading-relaxed"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {bio.description}
                        </p>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="text-center py-12">
                  <p
                    className="text-xl text-foreground"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Биографии не найдены
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
