export function isAllValuesNull(obj: Record<string, any>): boolean {
    return Object.values(obj).every((value) => value === null || value === undefined || value === '');
}
