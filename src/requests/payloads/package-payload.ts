import * as yup from "yup";

/**
 * Validation schema for {@link Package}.
 */
export const PACKAGE_SCHEMA = yup
  .object()
  .shape({
    /** Unique identifier of the package. */
    id: yup.number().integer().positive().required(),

    /** Unique package name (e.g., junit:junit). */
    package_name: yup.string().required(),

    /** Forge of the package (mvn, pypi, debian). */
    forge: yup.string().required(),

    /** Readable project name (e.g., JUnit). */
    project_name: yup.string().required(),

    /** The repository source of the package. */
    repository: yup.string().required(),

    /** The date when the package was published. */
    created_at: yup.date().max(new Date(Date.now())).nullable(),

    /** The latest version of the package. */
    version: yup.string(),
  })
  .required();

/**
 * The type of the Package instance generated from yup schema {@link PACKAGE_SCHEMA}.
 */
export type Package = yup.InferType<typeof PACKAGE_SCHEMA>;

/**
 * Default object for {@link Package}
 */
export const defaultPackage: Package = {
  id: 0,
  package_name: "",
  forge: "mvn",
  project_name: "",
  repository: "",
  created_at: null,
};

/**
 * Validates that the given response payload is as expected.
 * @param {any} payload - the response payload.
 * @returns {boolean} - whether or not the payload is type-safe for {@link Package}.
 */
export function isValidPackageResponsePayload(
  payload: any
): payload is Package {
  return PACKAGE_SCHEMA.isValidSync(payload);
}
