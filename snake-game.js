class Snake {
  #head;
  #length;
  #speed;

  constructor(position) {
    this.#head = position;
    this.#length = 1;
  }

  moveRight() {
    this.#head += 1;
  }

  get snakeHead() {
    return this.#head;
  }

  get sLength() {
    return this.#length;
  }
}

class Food {
  #position;
  #points;

  constructor(position) {
    this.#position = position;
    this.#points = 2;
  }

  get foodPosition() {
    return this.#position;
  }
}

class SnakeGame {
  #snake;
  #food;

  constructor(Snake, food) {
    this.#snake = snake;
    this.#food = food;
  }

  hasFoodEaten() {
    return this.#snake.snakeHead === this.#food.foodPosition;
  }

  displayStatus() {
    console.clear();

    const snakeStatus = "🐍".padStart(this.#snake.snakeHead);
    const distanceBetweenSnakeAndFood =
      this.#food.foodPosition - this.#snake.snakeHead;

    let foodStatus = "🐁".padStart(distanceBetweenSnakeAndFood);

    if (distanceBetweenSnakeAndFood < 2) {
      foodStatus = "";
    }

    console.log(distanceBetweenSnakeAndFood);
    const frame = snakeStatus + foodStatus;
    console.log(frame);
  }

  generateFoodPosition = () => {
    const lowerBound = this.#snake.snakeHead;
    const upperBound = lowerBound + 9;
    const randomPoint =
      lowerBound + Math.floor(Math.random() * (upperBound - lowerBound));

      console.log('food at', randomPoint);

    return randomPoint;
  };

  start() {
    setInterval(() => {
      this.#snake.moveRight();

      if (this.hasFoodEaten()) {
        const position = this.generateFoodPosition();
        this.#food = new Food(position);
      }

      this.displayStatus();
    }, 1000);
  }
}

const snake = new Snake(0);
const food = new Food(2);
const sg = new SnakeGame(snake, food);

sg.start();
