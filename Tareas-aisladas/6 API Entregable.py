import requests #Libreria necesaria para hacer peticiones

base_url = "http://numbersapi.com" #La URL de la API con la que trabajaremos

def trivia_fetch(num):
    url = f"{base_url}/{num}"  #Se agrega a nuestro URL base el numero introducido por el usuario
    response = requests.get(url)
    print(response)

    if response.status_code == 200: #Cuando el servidor acepta nuestra peticion nos envia el texto que contiene la URL
       print(response.text)
    else:
        print("Error!")

number_trivia = int(input("Pick a number! ")) #Instruccion para el usuario
trivia_fetch(number_trivia) #Llama a la funcion con el numero ingresado por el usuario