import { Image, ScrollView, View, Text, ActivityIndicator, FlatList } from 'react-native';

import '../../global.css';
import { images } from 'constants/images';
import { icons } from 'constants/icons';
import { useRouter } from 'expo-router';
import SearchBar from '../../components/SearchBar';
import { fetchMovies } from 'services/api';
import useFetch from 'services/useFetch';
import MovieCard from 'components/MovieCard';

export default function Index() {
  const router = useRouter();

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() => fetchMovies({ query: '' }));

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute z-0 w-full" />
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: '100%', paddingBottom: 10 }}>
        <Image source={icons.logo} className="mx-auto mb-5 mt-20 h-10 w-12" />

        {moviesLoading ? (
          <ActivityIndicator size="large" color="#0000ff" className="mt-10 self-center" />
        ) : moviesError ? (
          <Text className="text-white">Error: {moviesError?.message}</Text>
        ) : (
          <View className="mt-5 flex-1">
            <SearchBar onPress={() => router.push('/search')} placeholder="Search for a movie" />
            <>
              <Text className="mb-3 mt-5 text-lg font-bold text-white">Latest Movies</Text>
              <FlatList
                data={movies}
                scrollEnabled={false}
                keyExtractor={(item) => item.id.toString()}
                numColumns={3}
                columnWrapperStyle={{
                  justifyContent: 'flex-start',
                  gap: 20,
                  paddingRight: 5,
                  marginBottom: 10,
                }}
                className="mt-2 pb-32"
                renderItem={({ item }) => <MovieCard {...item} />}
              />
            </>
          </View>
        )}
      </ScrollView>
    </View>
  );
}
