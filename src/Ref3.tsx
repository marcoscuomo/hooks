import { FormEvent, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Ref3() {

  const nameInputRef = useRef<HTMLInputElement>(null);
  const [name, setName] = useState<string | undefined>('');
  const acceptTermsRef = useRef({ value: false });

  const nameRef = useRef<HTMLInputElement>(null);
  const ageReg = useRef<HTMLInputElement>(null);
  const [nameForm, setNameForm] = useState<string | undefined>();
  const [ageForm, setAgeForm] = useState<string | undefined>();

  useEffect(() => {
    nameInputRef.current?.focus();
  }, []);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setName(nameInputRef.current?.value);
  }

  function handleAcceptTerms() {
    acceptTermsRef.current.value = !acceptTermsRef.current.value;
  }

  return(
    <main className="main">
      <h1>Useref case use 3 - RocketSeat</h1>
      <p><Link to="/">Voltar</Link></p>
      <h1>{name}</h1>
      <h1>--</h1>
      <h2>name: {nameForm ? nameRef : ''}</h2>
      <h2>age: {ageForm ? ageForm : ''}</h2>


      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={nameInputRef}
          placeholder="Digite seu nome"
        />

        <button type="button" onClick={handleAcceptTerms}>ceitar termos</button>

        <button type="submit">Send</button>
      </form>
    </main>
  )
}
