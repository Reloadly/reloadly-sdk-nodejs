/**
 * Class that represents an HTTP Request that can be executed.
 *
 * @param <T> the type of payload expected in the response after the execution.
 */
export interface IRequest<T> {
    /**
     * Executes this request.
     *
     * @return the response body JSON decoded as T
     * @throws APIException   if the request was executed but the response wasn't successful.
     * @throws ReloadlyException if the request couldn't be created or executed successfully.
     */
    execute(): Promise<T>;
}
