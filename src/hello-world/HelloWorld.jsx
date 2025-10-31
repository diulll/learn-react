export default function HelloWorld() {
  return (
    <div>
      <HeaderHelloWorld />
      <ParagraphHelloWorld />
    </div>
  );
}

function HeaderHelloWorld() {
  const text = "Hello, World!";
  return (
    <header>
      <h1>{text.toUpperCase()}</h1>
    </header>
  );
}

function ParagraphHelloWorld() {
  const text = "Belajar React.JS, First Time Broo";
  return (
    <header>
      <p>{text.toLowerCase()}</p>
    </header>
  );
}
