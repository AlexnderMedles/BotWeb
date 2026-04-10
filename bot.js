// ===== CONFIGURATION =====
// После деплоя Cloudflare Worker, вставьте сюда URL вашего воркера:
const WORKER_URL = 'https://web-bot.jobgodmode.workers.dev'; // Например: https://netaware-bot.your-name.workers.dev

// ===== BOT KNOWLEDGE BASE (FALLBACK) =====
const KNOWLEDGE_BASE = {
  greetings: [
    "Привет! 👋 Я — NetAware Bot, ИИ-помощник по теме интернет-зависимости. Я работаю на базе Google Gemma AI и могу ответить на любой ваш вопрос по этой теме. Задайте вопрос или нажмите кнопку ниже!",
    "Здравствуйте! 🌟 Я — умный бот с искусственным интеллектом (Gemma AI). Помогу разобраться в теме интернет-зависимости. Готов ответить на ваши вопросы!",
    "Привет! Я — NetAware, бот с настоящим ИИ (Google Gemma). Спроси меня что угодно об интернет-зависимости — я дам подробный ответ! 🧠"
  ],

  symptoms: {
    response: `Основные симптомы интернет-зависимости:

• Навязчивое стремление проверять интернет, соцсети, уведомления
• Увеличение времени в сети — нужно всё больше для удовлетворения
• Раздражительность при отсутствии доступа к интернету
• Пренебрежение учёбой, работой, личными отношениями
• Потеря контроля над временем в сети
• Физические признаки: сухость глаз, боли в спине, нарушения сна
• Социальная изоляция — предпочтение онлайн-общения живому
• Ложь о количестве проведённого в сети времени`
  },

  causes: {
    response: `Основные причины формирования интернет-зависимости:

• Психологические: одиночество, депрессия, низкая самооценка, тревожность
• Социальные: проблемы в семье, буллинг, трудности в общении
• Нейробиологические: выброс дофамина при получении лайков, уведомлений
• Дизайн приложений: бесконечная лента, push-уведомления, алгоритмы вовлечения
• Доступность: постоянный доступ к интернету через смартфоны
• Бегство от реальности: интернет как способ уйти от проблем`
  },

  consequences: {
    response: `Последствия длительной интернет-зависимости:

Физические: ухудшение зрения, нарушение осанки, расстройства сна, головные боли.

Психические: депрессия, тревожные расстройства, снижение концентрации, FOMO.

Социальные: ухудшение успеваемости, конфликты в семье, потеря друзей, изоляция.`
  },

  treatment: {
    response: `Способы борьбы с интернет-зависимостью:

Самопомощь: установите таймер, устройте цифровой детокс, удалите лишние приложения, замените онлайн-время спортом или хобби.

Профессиональная помощь: когнитивно-поведенческая терапия, групповая терапия, консультация психолога.`
  },

  statistics: {
    response: `Статистика интернет-зависимости:

• Более 4.9 млрд людей в мире пользуются интернетом
• Средний человек проводит в смартфоне 6-7 часов в день
• Около 6% населения мира страдает интернет-зависимостью
• Проверка телефона происходит в среднем 96 раз в день
• 70% зависимых испытывают нарушения сна`
  },

  tips: {
    response: `Правила здорового использования интернета:

1. Правило 20-20-20: каждые 20 минут смотрите на объект в 20 футах на 20 секунд
2. Зоны без телефона: спальня, обеденный стол
3. Не берите телефон первые 30 минут после пробуждения
4. Установите лимиты по времени в настройках телефона
5. Отключите уведомления от несрочных приложений
6. Читайте книгу вместо скроллинга ленты
7. Планируйте встречи с друзьями офлайн
8. Практикуйте медитацию 5-10 минут в день`
  }
};

// ===== TEST QUESTIONS =====
const TEST_QUESTIONS = [
  {
    question: "Как часто вы проводите в интернете больше времени, чем планировали?",
    options: ["Никогда", "Иногда", "Часто", "Всегда"]
  },
  {
    question: "Пренебрегаете ли вы домашними делами, чтобы побыть в интернете?",
    options: ["Никогда", "Иногда", "Часто", "Всегда"]
  },
  {
    question: "Предпочитаете ли вы интернет живому общению с друзьями?",
    options: ["Никогда", "Иногда", "Часто", "Всегда"]
  },
  {
    question: "Проверяете ли вы уведомления, едва проснувшись?",
    options: ["Никогда", "Иногда", "Часто", "Всегда"]
  },
  {
    question: "Чувствуете ли вы раздражение, когда нет доступа к интернету?",
    options: ["Никогда", "Иногда", "Часто", "Всегда"]
  },
  {
    question: "Страдает ли ваша учёба или работа из-за времени в интернете?",
    options: ["Никогда", "Иногда", "Часто", "Всегда"]
  },
  {
    question: "Используете ли вы интернет, чтобы уйти от проблем или плохого настроения?",
    options: ["Никогда", "Иногда", "Часто", "Всегда"]
  },
  {
    question: "Теряете ли вы счёт времени, находясь в интернете?",
    options: ["Никогда", "Иногда", "Часто", "Всегда"]
  },
  {
    question: "Пробовали ли вы сократить время в интернете, но безуспешно?",
    options: ["Никогда", "Иногда", "Часто", "Всегда"]
  },
  {
    question: "Скрываете ли вы от окружающих, сколько времени проводите в сети?",
    options: ["Никогда", "Иногда", "Часто", "Всегда"]
  }
];

// ===== CHATBOT CLASS =====
class ChatBot {
  constructor() {
    this.messagesContainer = document.getElementById('chatMessages');
    this.inputField = document.getElementById('chatInput');
    this.sendButton = document.getElementById('sendBtn');
    this.testProgress = document.getElementById('testProgress');
    this.progressBar = document.getElementById('progressBar');
    this.progressText = document.getElementById('progressText');

    this.isTestActive = false;
    this.currentQuestion = 0;
    this.testScores = [];
    this.conversationHistory = [];
    this.isAIAvailable = WORKER_URL !== 'YOUR_WORKER_URL_HERE';

    this.init();
  }

  init() {
    this.sendButton.addEventListener('click', () => this.handleSend());

    this.inputField.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        this.handleSend();
      }
    });

    document.querySelectorAll('.quick-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const action = btn.dataset.action;
        this.handleQuickAction(action);
      });
    });

    document.getElementById('scrollToChat')?.addEventListener('click', () => {
      document.getElementById('chatSection').scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('startTestBtn')?.addEventListener('click', () => {
      document.getElementById('chatSection').scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => this.startTest(), 500);
    });

    // Initial greeting with delay
    setTimeout(() => {
      const greeting = KNOWLEDGE_BASE.greetings[Math.floor(Math.random() * KNOWLEDGE_BASE.greetings.length)];
      this.addBotMessage(greeting);

      if (!this.isAIAvailable) {
        setTimeout(() => {
          this.addBotMessage("⚠️ ИИ-режим не настроен. Бот работает в режиме базы знаний. Для подключения ИИ следуйте инструкции в файле DEPLOY.md");
        }, 1500);
      }
    }, 800);
  }

  async handleSend() {
    const text = this.inputField.value.trim();
    if (!text) return;

    this.addUserMessage(text);
    this.inputField.value = '';

    if (this.isTestActive) return;

    // Try AI first, then fallback
    if (this.isAIAvailable) {
      await this.getAIResponse(text);
    } else {
      this.showTyping();
      setTimeout(() => {
        this.removeTyping();
        this.processMessageFallback(text);
      }, 800 + Math.random() * 600);
    }
  }

  // ===== AI RESPONSE =====
  async getAIResponse(text) {
    this.showTyping();
    this.inputField.disabled = true;
    this.sendButton.disabled = true;

    // Add to history
    this.conversationHistory.push({ role: 'user', text: text });

    try {
      const response = await fetch(WORKER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          history: this.conversationHistory.slice(-10),
        }),
      });

      this.removeTyping();

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const data = await response.json();
      const reply = data.reply || 'Извините, не удалось получить ответ.';

      this.conversationHistory.push({ role: 'model', text: reply });
      this.addBotMessage(reply);
    } catch (error) {
      console.error('AI Error:', error);
      this.removeTyping();

      // Fallback to local knowledge base
      this.addBotMessage("⚡ ИИ временно недоступен, отвечаю из базы знаний:");
      setTimeout(() => {
        this.processMessageFallback(text);
      }, 300);
    } finally {
      this.inputField.disabled = false;
      this.sendButton.disabled = false;
      this.inputField.focus();
    }
  }

  handleQuickAction(action) {
    if (this.isTestActive) return;

    const actionMap = {
      'test': () => {
        this.addUserMessage('🧪 Пройти тест');
        this.showTyping();
        setTimeout(() => {
          this.removeTyping();
          this.startTest();
        }, 600);
      },
      'symptoms': () => {
        this.addUserMessage('🔍 Симптомы');
        if (this.isAIAvailable) {
          this.getAIResponse('Расскажи подробно о симптомах интернет-зависимости');
        } else {
          this.showTyping();
          setTimeout(() => {
            this.removeTyping();
            this.addBotMessage(KNOWLEDGE_BASE.symptoms.response);
          }, 600);
        }
      },
      'tips': () => {
        this.addUserMessage('💡 Советы');
        if (this.isAIAvailable) {
          this.getAIResponse('Дай мне полезные советы по борьбе с интернет-зависимостью');
        } else {
          this.showTyping();
          setTimeout(() => {
            this.removeTyping();
            this.addBotMessage(KNOWLEDGE_BASE.tips.response);
          }, 600);
        }
      },
      'stats': () => {
        this.addUserMessage('📊 Статистика');
        if (this.isAIAvailable) {
          this.getAIResponse('Расскажи статистику и факты об интернет-зависимости');
        } else {
          this.showTyping();
          setTimeout(() => {
            this.removeTyping();
            this.addBotMessage(KNOWLEDGE_BASE.statistics.response);
          }, 600);
        }
      },
      'causes': () => {
        this.addUserMessage('⚡ Причины');
        if (this.isAIAvailable) {
          this.getAIResponse('Какие основные причины интернет-зависимости?');
        } else {
          this.showTyping();
          setTimeout(() => {
            this.removeTyping();
            this.addBotMessage(KNOWLEDGE_BASE.causes.response);
          }, 600);
        }
      },
      'treatment': () => {
        this.addUserMessage('💊 Лечение');
        if (this.isAIAvailable) {
          this.getAIResponse('Как лечить интернет-зависимость? Какие методы существуют?');
        } else {
          this.showTyping();
          setTimeout(() => {
            this.removeTyping();
            this.addBotMessage(KNOWLEDGE_BASE.treatment.response);
          }, 600);
        }
      }
    };

    if (actionMap[action]) actionMap[action]();
  }

  // ===== FALLBACK MESSAGE PROCESSING =====
  processMessageFallback(text) {
    const lower = text.toLowerCase();

    if (/^(привет|здравствуй|хай|хелло|hello|hi|yo|дарова)/i.test(lower)) {
      this.addBotMessage(KNOWLEDGE_BASE.greetings[Math.floor(Math.random() * KNOWLEDGE_BASE.greetings.length)]);
      return;
    }

    if (/тест|проверить|пройти|проверка|диагност/i.test(lower)) {
      this.startTest();
      return;
    }

    if (/симптом|признак|как понять|распознать/i.test(lower)) {
      this.addBotMessage(KNOWLEDGE_BASE.symptoms.response);
      return;
    }

    if (/причин|почему|из-за чего|откуда/i.test(lower)) {
      this.addBotMessage(KNOWLEDGE_BASE.causes.response);
      return;
    }

    if (/последств|вред|опасн|чем грозит/i.test(lower)) {
      this.addBotMessage(KNOWLEDGE_BASE.consequences.response);
      return;
    }

    if (/лечени|борьб|как избавить|терапи|бороть/i.test(lower)) {
      this.addBotMessage(KNOWLEDGE_BASE.treatment.response);
      return;
    }

    if (/статистик|факт|цифр|число|сколько/i.test(lower)) {
      this.addBotMessage(KNOWLEDGE_BASE.statistics.response);
      return;
    }

    if (/совет|рекомендац|правил|гигиен|что делать/i.test(lower)) {
      this.addBotMessage(KNOWLEDGE_BASE.tips.response);
      return;
    }

    if (/спасибо|благодар/i.test(lower)) {
      this.addBotMessage("Пожалуйста! 😊 Если будут ещё вопросы — я всегда рядом. Берегите себя! 💜");
      return;
    }

    if (/пока|до свидан|прощай/i.test(lower)) {
      this.addBotMessage("До свидания! 👋 Помните о цифровой гигиене. Возвращайтесь, если будут вопросы! 💜");
      return;
    }

    this.addBotMessage(`Я не нашёл ответа на этот вопрос в базе знаний 🤔

Попробуйте:
• «симптомы» — признаки зависимости
• «тест» — пройти диагностику
• «советы» — получить рекомендации
• «причины» / «последствия» / «лечение»

Или нажмите кнопку быстрого действия ⬇️`);
  }

  // ===== TEST LOGIC =====
  startTest() {
    this.isTestActive = true;
    this.currentQuestion = 0;
    this.testScores = [];

    this.testProgress.classList.add('active');
    this.updateProgress();

    this.addBotMessage(`🧪 Тест на интернет-зависимость

Я задам вам 10 вопросов. Отвечайте честно — результат увидите только вы!

Оценка основана на адаптированном тесте Кимберли Янг.`);

    setTimeout(() => this.askQuestion(), 1000);
  }

  askQuestion() {
    const q = TEST_QUESTIONS[this.currentQuestion];
    const questionHTML = `<b>Вопрос ${this.currentQuestion + 1}/10:</b>\n${q.question}`;

    this.addBotMessage(questionHTML, true);

    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'test-options';

    q.options.forEach((option, index) => {
      const btn = document.createElement('button');
      btn.className = 'test-option';
      btn.textContent = option;
      btn.addEventListener('click', () => {
        this.answerQuestion(index, option);
        optionsDiv.remove();
      });
      optionsDiv.appendChild(btn);
    });

    const messages = this.messagesContainer.querySelectorAll('.message.bot');
    const lastMsg = messages[messages.length - 1];
    if (lastMsg) {
      lastMsg.querySelector('.message-bubble').appendChild(optionsDiv);
    }

    this.scrollToBottom();
  }

  answerQuestion(scoreIndex, optionText) {
    this.testScores.push(scoreIndex);
    this.addUserMessage(optionText);
    this.currentQuestion++;
    this.updateProgress();

    if (this.currentQuestion < TEST_QUESTIONS.length) {
      this.showTyping();
      setTimeout(() => {
        this.removeTyping();
        this.askQuestion();
      }, 500);
    } else {
      this.showTyping();
      setTimeout(() => {
        this.removeTyping();
        this.showResults();
      }, 1000);
    }
  }

  updateProgress() {
    const percent = (this.currentQuestion / TEST_QUESTIONS.length) * 100;
    this.progressBar.style.width = percent + '%';
    this.progressText.textContent = `Вопрос ${Math.min(this.currentQuestion + 1, TEST_QUESTIONS.length)} из ${TEST_QUESTIONS.length}`;
  }

  showResults() {
    this.isTestActive = false;
    this.testProgress.classList.remove('active');

    const total = this.testScores.reduce((sum, s) => sum + s, 0);
    const maxScore = TEST_QUESTIONS.length * 3;
    const percentage = Math.round((total / maxScore) * 100);

    let level, levelClass, description, emoji;

    if (percentage <= 25) {
      level = "Низкий уровень";
      levelClass = "low";
      emoji = "🟢";
      description = "У вас низкий уровень интернет-зависимости. Вы хорошо контролируете своё время в сети!";
    } else if (percentage <= 55) {
      level = "Средний уровень";
      levelClass = "medium";
      emoji = "🟡";
      description = "У вас средний уровень зависимости. Интернет начинает влиять на вашу жизнь. Попробуйте цифровой детокс.";
    } else if (percentage <= 80) {
      level = "Высокий уровень";
      levelClass = "high";
      emoji = "🟠";
      description = "У вас высокий уровень зависимости. Рекомендуется установить лимиты и обратиться к специалисту.";
    } else {
      level = "Критический уровень";
      levelClass = "high";
      emoji = "🔴";
      description = "Критический уровень зависимости. Рекомендуется обратиться к психологу для профессиональной помощи.";
    }

    const resultHTML = `${emoji} <b>Результаты теста:</b>

<div class="result-card">
  <div class="result-level ${levelClass}">${level} (${percentage}%)</div>
  <div class="result-description">${description}</div>
</div>

Напишите «советы» для рекомендаций или «лечение» для информации о помощи.`;

    this.addBotMessage(resultHTML, true);

    // If AI is available, get personalized recommendation
    if (this.isAIAvailable) {
      setTimeout(() => {
        this.getAIResponse(`Пользователь прошёл тест на интернет-зависимость и получил результат: ${level} (${percentage}%). Дай ему персональные рекомендации исходя из этого результата. Будь поддерживающим и конкретным.`);
      }, 1500);
    }
  }

  // ===== UI METHODS =====
  addBotMessage(text, isHTML = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message bot';

    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    avatar.textContent = '🤖';

    const bubble = document.createElement('div');
    bubble.className = 'message-bubble';

    if (isHTML) {
      bubble.innerHTML = text.replace(/\n/g, '<br>');
    } else {
      let formatted = text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\n/g, '<br>');
      bubble.innerHTML = formatted;
    }

    messageDiv.appendChild(avatar);
    messageDiv.appendChild(bubble);
    this.messagesContainer.appendChild(messageDiv);
    this.scrollToBottom();
  }

  addUserMessage(text) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message user';

    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    avatar.textContent = '👤';

    const bubble = document.createElement('div');
    bubble.className = 'message-bubble';
    bubble.textContent = text;

    messageDiv.appendChild(avatar);
    messageDiv.appendChild(bubble);
    this.messagesContainer.appendChild(messageDiv);
    this.scrollToBottom();
  }

  showTyping() {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message bot typing-message';
    typingDiv.id = 'typingIndicator';

    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    avatar.textContent = '🤖';

    const bubble = document.createElement('div');
    bubble.className = 'message-bubble';
    bubble.innerHTML = `<div class="typing-indicator"><span></span><span></span><span></span></div>`;

    typingDiv.appendChild(avatar);
    typingDiv.appendChild(bubble);
    this.messagesContainer.appendChild(typingDiv);
    this.scrollToBottom();
  }

  removeTyping() {
    const typing = document.getElementById('typingIndicator');
    if (typing) typing.remove();
  }

  scrollToBottom() {
    requestAnimationFrame(() => {
      this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    });
  }
}

// ===== SCROLL REVEAL =====
function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ===== COUNTER ANIMATION =====
function animateCounters() {
  const counters = document.querySelectorAll('[data-count]');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
          entry.target.dataset.animated = 'true';
          const target = parseInt(entry.target.dataset.count);
          const suffix = entry.target.dataset.suffix || '';
          const duration = 2000;
          const start = performance.now();

          function update(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            entry.target.textContent = Math.round(target * eased) + suffix;

            if (progress < 1) requestAnimationFrame(update);
          }

          requestAnimationFrame(update);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach(el => observer.observe(el));
}

// ===== NAVBAR SCROLL EFFECT =====
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });
}

// ===== SMOOTH SCROLL =====
function initSmoothScroll() {
  document.querySelectorAll('.navbar-links a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  const bot = new ChatBot();
  initScrollReveal();
  animateCounters();
  initNavbarScroll();
  initSmoothScroll();
});
