/**
 * Home Page - Lost Future Website
 * 
 * Design Philosophy: Minimalist black and white with serious typography
 * - Hero section with title
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
  //      date: "15.03.2024",                       // Дата (в формате ДД.МММ.ГГГГ)
  //      description: "Описание биографии...",     // Текст с информацией о человеке
  //      imageUrl: "https://example.com/image.jpg", // URL изображения (квадратное)
  //    }
  // 3. Сохраните файл - новая биография появится на сайте автоматически
  // ============================================================================

  // Biography data - ДОБАВЛЯЙТЕ НОВЫЕ БИОГРАФИИ СЮДА
  const biographies = [
    {
      id: 1,
      name: "Биография 1",
      date: "15.03.2024",
      description: "Добавьте описание здесь",
      imageUrl: "", // Вставьте URL изображения
    },
    {
      id: 2,
      name: "Биография 2",
      date: "20.03.2024",
      description: "Добавьте описание здесь",
      imageUrl: "", // Вставьте URL изображения
    },
    {
      id: 3,
      name: "Биография 3",
      date: "25.03.2024",
      description: "Добавьте описание здесь",
      imageUrl: "", // Вставьте URL изображения
    },
    {
      id: 4,
      name: "Биография 4",
      date: "30.03.2024",
      description: "Добавьте описание здесь",
      imageUrl: "", // Вставьте URL изображения
    },
  ];

  // Optional: Set background image for the entire page
  const backgroundImageUrl = ""; // Вставьте URL фонового изображения

  // State for search
  const [searchQuery, setSearchQuery] = useState("");

  // Filter biographies based on search query
  const filteredBiographies = biographies.filter((bio) =>
    bio.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    bio.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div 
      className="min-h-screen bg-background text-foreground"
      style={{
        backgroundImage: backgroundImageUrl ? `url(${backgroundImageUrl})` : "none",
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
              <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                Потерянное будущее
              </h1>
              <p className="text-lg md:text-2xl text-foreground max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                Добавьте описание вашего проекта здесь
              </p>
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
                  placeholder="Поиск биографии..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
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

            {/* About Project Text */}
            <div className="mt-12 max-w-4xl mx-auto border-2 border-foreground p-8">
              <p className="text-lg leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                Этот проект посвящён памяти погибших солдат. Здесь собраны истории мужества и героизма. 
                Проект постоянно обновляется с новыми биографиями и историями.
              </p>
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
                      <div className={`image-container ${isEven ? "md:order-1" : "md:order-2"}`}>
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
                      <div className={`text-container ${isEven ? "md:order-2" : "md:order-1"}`}>
                        {/* Date */}
                        <p 
                          className="text-sm md:text-base text-foreground mb-2" 
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {bio.date}
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
                  <p className="text-xl text-foreground" style={{ fontFamily: "var(--font-body)" }}>
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
