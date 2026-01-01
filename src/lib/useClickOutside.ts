/**
 * A composable that handles clicking outside of specified elements
 * Returns a cleanup function to be used in $effect
 * @param callback - Function to call when clicked outside
 * @param refs - Array of element refs to exclude from outside clicks
 */
export function useClickOutside(
    callback: () => void,
    refs: Array<HTMLElement | undefined>
): () => void {
    function handleClickOutside(event: MouseEvent): void {
        const clickedOutside = refs.every(
            (ref) => ref && !ref.contains(event.target as Node)
        );

        if (clickedOutside && refs.some((ref) => ref !== undefined)) {
            callback();
        }
    }

    // Delay adding the listener to avoid catching the same click that triggered the state change
    const timeoutId = setTimeout(() => {
        document.addEventListener('click', handleClickOutside);
    }, 0);

    // Return cleanup function
    return () => {
        clearTimeout(timeoutId);
        document.removeEventListener('click', handleClickOutside);
    };
}
