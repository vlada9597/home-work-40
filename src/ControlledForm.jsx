import React, { useState, useRef, useEffect } from "react";

// 1. Controlled Component
function ControlledForm() {
  const [formData, setFormData] = useState({
    name: "",
    agree: false,
    country: "ua",
  });

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Дані форми: ${JSON.stringify(formData, null, 2)}`);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-xl mb-6">
      <h2 className="font-bold mb-2">ControlledForm</h2>
      <input
        type="text"
        name="name"
        value={formData.name}
        placeholder="Ваше ім'я"
        onChange={handleChange}
        className="border p-2 rounded mb-2 block"
      />
      <label className="flex items-center gap-2 mb-2">
        <input
          type="checkbox"
          name="agree"
          checked={formData.agree}
          onChange={handleChange}
        />
        Погоджуюсь з умовами
      </label>
      <select
        name="country"
        value={formData.country}
        onChange={handleChange}
        className="border p-2 rounded mb-2 block"
      >
        <option value="ua">Україна</option>
        <option value="pl">Польща</option>
        <option value="de">Німеччина</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Надіслати
      </button>
    </form>
  );
}

// 2. Uncontrolled Component
function UncontrolledForm() {
  const nameRef = useRef();
  const agreeRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: nameRef.current.value,
      agree: agreeRef.current.checked,
    };
    alert(`Дані форми (uncontrolled): ${JSON.stringify(data, null, 2)}`);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-xl mb-6">
      <h2 className="font-bold mb-2">UncontrolledForm</h2>
      <input
        type="text"
        placeholder="Ваше ім'я"
        ref={nameRef}
        className="border p-2 rounded mb-2 block"
      />
      <label className="flex items-center gap-2 mb-2">
        <input type="checkbox" ref={agreeRef} />
        Погоджуюсь з умовами
      </label>
      <button type="submit" className="bg-green-500 text-white p-2 rounded">
        Надіслати
      </button>
    </form>
  );
}

// 3. Component with API request
function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // приклад з jsonplaceholder
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        if (!res.ok) throw new Error("Помилка завантаження даних");
        return res.json();
      })
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Завантаження...</p>;
  if (error) return <p className="text-red-500">Помилка: {error}</p>;

  return (
    <div className="p-4 border rounded-xl">
      <h2 className="font-bold mb-2">DataFetcher</h2>
      <p>
        <strong>ID:</strong> {data.id}
      </p>
      <p>
        <strong>Заголовок:</strong> {data.title}
      </p>
      <p>
        <strong>Тіло:</strong> {data.body}
      </p>
    </div>
  );
}

// Головний App
export default function App() {
  return (
    <div className="p-6 space-y-6">
      <ControlledForm />
      <UncontrolledForm />
      <DataFetcher />
    </div>
  );
}
