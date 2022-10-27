import { useHttp } from '../hooks/http.hook';

const useMarvelService = () => {
    const {loading, request, error, clearError} = useHttp();

    const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    const _apiKey = 'apikey=eeca8458288e83391237d48dbced06c5';
    const _baseOffset = 210;

    const getAllCharacters = async (offset = _baseOffset) => {
        const response = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`);
        return response.data.results.map(_transformCharacter);

    }
    const getCharacter = async (id) => {
        const response = await request(`${_apiBase}characters/${id}?${_apiKey}`);
        return _transformCharacter(response.data.results[0]);
    }

    const _transformCharacter = (char) => {
        return {
                id: char.id,
                name: char.name,
                description: char.description ? `${char.description.slice(0, 210)}...` : 'There is no description for this character',
                thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
                homepage: char.urls[0].url,
                wiki: char.urls[1].url,
                comics: char.comics.items
        }
    }

    return {loading, error, getAllCharacters, getCharacter, clearError}
}

export default useMarvelService;


