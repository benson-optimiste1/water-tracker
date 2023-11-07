import { VStack, Text, Progress, ProgressFilledTrack } from "@gluestack-ui/themed"
const GOAL = 3000
export default function Goal({ volume }) {
    return(
        <VStack justifyContent="space-around" h={180} 
        alignItems="center"
         py="$8" px="$4">

            <Text 
            color="$blue800" 
            fontSize="$lg"
            fontWeight="500">
            Goal: {GOAL}mL
            </Text>
            
            <Progress 
            w={300} 
            size="lg" 
            value={100 * volume / GOAL}>
                <ProgressFilledTrack />
            </Progress>
            
            <Text color="$blue800" 
            fontWeight="500" 
            fontSize="$xl">{volume}mL
            </Text>
        </VStack>

    )
}