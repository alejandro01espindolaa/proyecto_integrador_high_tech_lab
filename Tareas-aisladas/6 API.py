import requests     # Libreria necesaria para hacer peticiones

base_url = "http://numbersapi.com"     # La url de la API con la que trabajaremos

def get_number():
    number = input("Pick a number (or type 'exit' to quit): ")     # Mensaje de indicacion para el usuario pidiendo que ingrese un numero o escriba salir
    
    if number.lower() == "exit":
        return
    
    if not number.isdigit():     # Comprueba que el usuario este usando numeros y no letras
        print("Invalid number, try again.")
        return get_number()     # Vuelve a comenzar el proceso

    url = f"{base_url}/{number}"     # Se agrega a nuestro url base el numero introducido por el usuario
    response = requests.get(url)

    if response.status_code == 200:     # Cuando el servidor acepta nuestra peticion nos envia el texto que contiene la url
        print(response.text)
    else:
        print("Error! Could not retrieve data.")

    return get_number()  # Vuelve a comenzar el proceso

get_number()     # Inicia el proceso llamando a nuestra funcion