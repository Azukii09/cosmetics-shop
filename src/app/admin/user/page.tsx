import Button from "@/components/tokens/button";

export default function UserMasterPage() {
    return (
        <div className="container p-8">
            <div className={"bg-white p-6 rounded-md"}>
                {/*Title*/}
                <h4
                    className="mb-4 text-lg font-semibold text-secondary"
                >
                    User Master
                </h4>
                {/*Content Table*/}
                <div className="w-full mb-8 overflow-hidden rounded-lg shadow-xs">
                    <div className="w-full overflow-x-auto">
                        <table className="w-full whitespace-no-wrap">
                            <thead>
                                <tr
                                    className="text-xs font-semibold tracking-wide text-left text-info uppercase border-b bg-gray-50 "
                                >
                                    <th className="px-4 py-3">No</th>
                                    <th className="px-4 py-3">Name</th>
                                    <th className="px-4 py-3">Status</th>
                                    <th className="px-4 py-3">Descriptions</th>
                                    <th className="px-4 py-3">
                                        <span className={"flex justify-center"}>Actions</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody
                                className="bg-white divide-y"
                            >
                                <tr className="text-gray-700">
                                    <td className="px-4 py-3">
                                        1
                                    </td>
                                    <td className="px-4 py-3 text-sm">
                                        Admins
                                    </td>
                                    <td className="px-4 py-3 text-xs">
                                        <span
                                            className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full"
                                        >
                                          Approved
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 text-xs">
                                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi doloremque
                                            magni, molestias nulla recusandae sapiente ullam veniam voluptatum. Commodi
                                            dolore dolores magni maxime minima quisquam quos sapiente vel, voluptas
                                            voluptatum!
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 text-sm flex gap-2 justify-center">
                                        <Button typeName={"button"} className={"btn-sm btn-primary"} name={"detail"}/>
                                        <Button typeName={"button"} className={"btn-sm btn-warning"} name={"edit"}/>
                                        <Button typeName={"button"} className={"btn-sm btn-danger"} name={"delete"}/>
                                    </td>
                                </tr>
                                <tr className="text-gray-700">
                                    <td className="px-4 py-3">
                                        1
                                    </td>
                                    <td className="px-4 py-3 text-sm">
                                        Admins
                                    </td>
                                    <td className="px-4 py-3 text-xs">
                                        <span
                                            className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full"
                                        >
                                          Approved
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 text-xs">
                                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi doloremque
                                            magni, molestias nulla recusandae sapiente ullam veniam voluptatum. Commodi
                                            dolore dolores magni maxime minima quisquam quos sapiente vel, voluptas
                                            voluptatum!
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 text-sm flex gap-2 justify-center">
                                        <Button typeName={"button"} className={"btn-sm btn-primary"} name={"detail"}/>
                                        <Button typeName={"button"} className={"btn-sm btn-warning"} name={"edit"}/>
                                        <Button typeName={"button"} className={"btn-sm btn-danger"} name={"delete"}/>
                                    </td>
                                </tr>
                                <tr className="text-gray-700">
                                    <td className="px-4 py-3">
                                        1
                                    </td>
                                    <td className="px-4 py-3 text-sm">
                                        Admins
                                    </td>
                                    <td className="px-4 py-3 text-xs">
                                        <span
                                            className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full"
                                        >
                                          Approved
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 text-xs">
                                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi doloremque
                                            magni, molestias nulla recusandae sapiente ullam veniam voluptatum. Commodi
                                            dolore dolores magni maxime minima quisquam quos sapiente vel, voluptas
                                            voluptatum!
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 text-sm flex gap-2 justify-center">
                                        <Button typeName={"button"} className={"btn-sm btn-primary"} name={"detail"}/>
                                        <Button typeName={"button"} className={"btn-sm btn-warning"} name={"edit"}/>
                                        <Button typeName={"button"} className={"btn-sm btn-danger"} name={"delete"}/>
                                    </td>
                                </tr>
                                <tr className="text-gray-700">
                                    <td className="px-4 py-3">
                                        1
                                    </td>
                                    <td className="px-4 py-3 text-sm">
                                        Admins
                                    </td>
                                    <td className="px-4 py-3 text-xs">
                                        <span
                                            className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full"
                                        >
                                          Approved
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 text-xs">
                                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi doloremque
                                            magni, molestias nulla recusandae sapiente ullam veniam voluptatum. Commodi
                                            dolore dolores magni maxime minima quisquam quos sapiente vel, voluptas
                                            voluptatum!
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 text-sm flex gap-2 justify-center">
                                        <Button typeName={"button"} className={"btn-sm btn-primary"} name={"detail"}/>
                                        <Button typeName={"button"} className={"btn-sm btn-warning"} name={"edit"}/>
                                        <Button typeName={"button"} className={"btn-sm btn-danger"} name={"delete"}/>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div
                        className="grid px-4 py-3 text-xs font-semibold tracking-wide text-info uppercase border-t bg-gray-50 sm:grid-cols-9"
                    >
                        <span className="flex items-center col-span-3">
                          Showing 21-30 of 100
                        </span>
                        <span className="col-span-2"></span>
                        {/*Pagination*/}
                        <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
                          <nav aria-label="Table navigation">
                            <ul className="inline-flex items-center">
                              <li>
                                <button
                                    className="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-primary"
                                    aria-label="Previous"
                                >
                                  <svg
                                      aria-hidden="true"
                                      className="w-4 h-4 fill-current"
                                      viewBox="0 0 20 20"
                                  >
                                    <path
                                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                        fillRule="evenodd"
                                    ></path>
                                  </svg>
                                </button>
                              </li>
                              <li>
                                <button
                                    className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-primary"
                                >
                                  1
                                </button>
                              </li>
                              <li>
                                <button
                                    className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-primary"
                                >
                                  2
                                </button>
                              </li>
                              <li>
                                <button
                                    className="px-3 py-1 text-white transition-colors duration-150 bg-primary border border-r-0 border-primary rounded-md focus:outline-none focus:shadow-outline-primary"
                                >
                                  3
                                </button>
                              </li>
                              <li>
                                <button
                                    className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-primary"
                                >
                                  4
                                </button>
                              </li>
                              <li>
                                <span className="px-3 py-1">...</span>
                              </li>
                              <li>
                                <button
                                    className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-primary"
                                >
                                  8
                                </button>
                              </li>
                              <li>
                                <button
                                    className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-primary"
                                >
                                  9
                                </button>
                              </li>
                              <li>
                                <button
                                    className="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-primary"
                                    aria-label="Next"
                                >
                                  <svg
                                      className="w-4 h-4 fill-current"
                                      aria-hidden="true"
                                      viewBox="0 0 20 20"
                                  >
                                    <path
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clipRule="evenodd"
                                        fillRule="evenodd"
                                    ></path>
                                  </svg>
                                </button>
                              </li>
                            </ul>
                          </nav>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
