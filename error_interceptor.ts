import axios, { AxiosError } from 'axios'
import { useErrorStore } from './error_store'

// Использование store
const errorStore = useErrorStore()

// Создание экземпляра axios
const api = axios.create()

// Функция для обработки ошибок при получении списка пользователей
const handleUsersError = (error: AxiosError) => {
  console.log('Ошибка при получении списка пользователей')
  return Promise.reject(error)
}

// Функция для обработки ошибок при получении информации о продукте
const handleProductError = (error: AxiosError) => {
  console.log('Ошибка при получении информации о продукте')
  return Promise.reject(error)
}

// Запрос к API для получения списка пользователей с локальным перехватчиком
api.get('/users', {
  errorInterceptor: handleUsersError
})

// Запрос к API для получения информации о продукте с локальным перехватчиком
api.get('/product/1', {
  errorInterceptor: handleProductError
})

// Глобальный перехватчик ответов
api.interceptors.response.use(
  response => response,
  (error: AxiosError) => {
    // Вызов локального перехватчика, если он определен
    if (error.config.errorInterceptor) {
      errorStore.handleError(error) // Добавим ошибку в store
      return error.config.errorInterceptor(error)
    }

    // Обработка ошибок по умолчанию
    console.log('Произошла ошибка')
    return Promise.reject(error)
  }
)
