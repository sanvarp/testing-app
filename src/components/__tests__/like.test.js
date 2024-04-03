import { render, screen, fireEvent } from "@testing-library/react";
import Like from "../like"; 

// Prueba para verificar el valor por defecto de los "likes"
test("Los likes por defecto deben ser cero", () => {
    render(<Like />);
    expect(screen.getByText("Likes: 0")).toBeInTheDocument();
  });
  
  // Prueba para verificar que el contador de likes se incrementa al hacer clic en el botón Like
  test("Incrementa los likes en 1 cuando se hace clic en el botón Like", () => {
    render(<Like />);
    const botonIncrementar = screen.getByText("Like"); 
    fireEvent.click(botonIncrementar); 
    expect(screen.getByText("Likes: 1")).toBeInTheDocument(); 
  });
  
  // Prueba para verificar que el contador de likes se decrementa al hacer clic en el botón Dislike
  test("Decrementa los likes en 1 cuando se hace clic en el botón Dislike", () => {
    render(<Like />);
    const botonDecrementar = screen.getByText("Dislike"); 
    fireEvent.click(botonDecrementar); 
    expect(screen.getByText("Likes: -1")).toBeInTheDocument(); 
  });