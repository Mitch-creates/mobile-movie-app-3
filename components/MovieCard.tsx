import { icons } from 'constants/icons';
import { Link } from 'expo-router';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const MovieCard = ({
  id,
  poster_path,
  vote_average,
  title,
  release_date,
  original_language,
}: Movie) => {
  return (
    //asChild is used to allow the Link to wrap the TouchableOpacity
    //This way, the entire card is clickable and navigates to the movie details page
    <Link href={`/movies/${id}`} asChild>
      <TouchableOpacity className="flex-1">
        <Image
          source={{
            uri: poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : `https://placehold.co/600x400/1a1a1a/ffffff.png`,
          }}
          className="h-52 w-full rounded-lg"
          resizeMode="cover"
        />
        <Text className="mt-2 text-sm font-bold text-white" numberOfLines={1}>
          {title}
        </Text>
        <View className="flex-row items-center justify-start gap-x-1">
          <Image source={icons.star} className="size-4" />
          <Text className="text-xs font-bold uppercase text-white">
            {Math.round(vote_average / 2)}
          </Text>
        </View>
        <View className="flex-row items-center justify-between">
          <Text className="mt-1 text-xs font-medium text-light-300">
            {release_date?.split('-')[0]}
          </Text>
          <Text className="text-xs font-medium uppercase text-light-300">{original_language}</Text>
          {/* <Text className="text-xs font-medium uppercase text-light-300">Movie</Text> */}
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;
