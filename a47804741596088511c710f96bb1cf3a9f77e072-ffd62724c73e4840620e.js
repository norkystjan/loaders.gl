(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"/Xah":function(e,t,E){"use strict";function r(e,t){return void 0===t&&(t=null),t?e+"?token="+t:e}function _(e){for(var t=e.url,E=e.attributeData,r=[],_=0;_<E.length;_++){var n=E[_].href.replace("./","");r.push(t+"/"+n)}return r}function n(e,t){for(var E=[],r=e.attributeStorageInfo,_=e.url,n=0;n<r.length;n++){var R=r[n].key;E.push(_+"/nodes/"+t+"/attributes/"+R+"/0")}return E}E.d(t,"c",(function(){return r})),E.d(t,"a",(function(){return _})),E.d(t,"b",(function(){return n}))},"2Daz":function(e,t,E){"use strict";E.d(t,"i",(function(){return _})),E.d(t,"b",(function(){return n})),E.d(t,"e",(function(){return R})),E.d(t,"c",(function(){return T})),E.d(t,"d",(function(){return a})),E.d(t,"g",(function(){return o})),E.d(t,"h",(function(){return i})),E.d(t,"f",(function(){return A})),E.d(t,"a",(function(){return s}));var r=E("Aabs"),_={UInt8:Uint8Array,UInt16:Uint16Array,UInt32:Uint32Array,Float32:Float32Array,UInt64:BigUint64Array},n={UInt8:r.a.UNSIGNED_BYTE,UInt16:r.a.UNSIGNED_INT,Float32:r.a.FLOAT,UInt32:r.a.UNSIGNED_INT,UInt64:r.a.DOUBLE},R={position:"position",normal:"normal",uv0:"uv0",color:"color",region:"region"},T={vertexAttributes:"vertexAttributes",featureAttributeOrder:"featureAttributeOrder",featureAttributes:"featureAttributes"},a={header:"header",vertexCount:"vertexCount",featureCount:"featureCount"},o={UInt8:1,UInt16:2,UInt32:4,Float32:4,UInt64:8},i="String",A="Oid32",s="Float64"},Aabs:function(e,t,E){"use strict";t.a={DEPTH_BUFFER_BIT:256,STENCIL_BUFFER_BIT:1024,COLOR_BUFFER_BIT:16384,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,ZERO:0,ONE:1,SRC_COLOR:768,ONE_MINUS_SRC_COLOR:769,SRC_ALPHA:770,ONE_MINUS_SRC_ALPHA:771,DST_ALPHA:772,ONE_MINUS_DST_ALPHA:773,DST_COLOR:774,ONE_MINUS_DST_COLOR:775,SRC_ALPHA_SATURATE:776,CONSTANT_COLOR:32769,ONE_MINUS_CONSTANT_COLOR:32770,CONSTANT_ALPHA:32771,ONE_MINUS_CONSTANT_ALPHA:32772,FUNC_ADD:32774,FUNC_SUBTRACT:32778,FUNC_REVERSE_SUBTRACT:32779,BLEND_EQUATION:32777,BLEND_EQUATION_RGB:32777,BLEND_EQUATION_ALPHA:34877,BLEND_DST_RGB:32968,BLEND_SRC_RGB:32969,BLEND_DST_ALPHA:32970,BLEND_SRC_ALPHA:32971,BLEND_COLOR:32773,ARRAY_BUFFER_BINDING:34964,ELEMENT_ARRAY_BUFFER_BINDING:34965,LINE_WIDTH:2849,ALIASED_POINT_SIZE_RANGE:33901,ALIASED_LINE_WIDTH_RANGE:33902,CULL_FACE_MODE:2885,FRONT_FACE:2886,DEPTH_RANGE:2928,DEPTH_WRITEMASK:2930,DEPTH_CLEAR_VALUE:2931,DEPTH_FUNC:2932,STENCIL_CLEAR_VALUE:2961,STENCIL_FUNC:2962,STENCIL_FAIL:2964,STENCIL_PASS_DEPTH_FAIL:2965,STENCIL_PASS_DEPTH_PASS:2966,STENCIL_REF:2967,STENCIL_VALUE_MASK:2963,STENCIL_WRITEMASK:2968,STENCIL_BACK_FUNC:34816,STENCIL_BACK_FAIL:34817,STENCIL_BACK_PASS_DEPTH_FAIL:34818,STENCIL_BACK_PASS_DEPTH_PASS:34819,STENCIL_BACK_REF:36003,STENCIL_BACK_VALUE_MASK:36004,STENCIL_BACK_WRITEMASK:36005,VIEWPORT:2978,SCISSOR_BOX:3088,COLOR_CLEAR_VALUE:3106,COLOR_WRITEMASK:3107,UNPACK_ALIGNMENT:3317,PACK_ALIGNMENT:3333,MAX_TEXTURE_SIZE:3379,MAX_VIEWPORT_DIMS:3386,SUBPIXEL_BITS:3408,RED_BITS:3410,GREEN_BITS:3411,BLUE_BITS:3412,ALPHA_BITS:3413,DEPTH_BITS:3414,STENCIL_BITS:3415,POLYGON_OFFSET_UNITS:10752,POLYGON_OFFSET_FACTOR:32824,TEXTURE_BINDING_2D:32873,SAMPLE_BUFFERS:32936,SAMPLES:32937,SAMPLE_COVERAGE_VALUE:32938,SAMPLE_COVERAGE_INVERT:32939,COMPRESSED_TEXTURE_FORMATS:34467,VENDOR:7936,RENDERER:7937,VERSION:7938,IMPLEMENTATION_COLOR_READ_TYPE:35738,IMPLEMENTATION_COLOR_READ_FORMAT:35739,BROWSER_DEFAULT_WEBGL:37444,STATIC_DRAW:35044,STREAM_DRAW:35040,DYNAMIC_DRAW:35048,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,BUFFER_SIZE:34660,BUFFER_USAGE:34661,CURRENT_VERTEX_ATTRIB:34342,VERTEX_ATTRIB_ARRAY_ENABLED:34338,VERTEX_ATTRIB_ARRAY_SIZE:34339,VERTEX_ATTRIB_ARRAY_STRIDE:34340,VERTEX_ATTRIB_ARRAY_TYPE:34341,VERTEX_ATTRIB_ARRAY_NORMALIZED:34922,VERTEX_ATTRIB_ARRAY_POINTER:34373,VERTEX_ATTRIB_ARRAY_BUFFER_BINDING:34975,CULL_FACE:2884,FRONT:1028,BACK:1029,FRONT_AND_BACK:1032,BLEND:3042,DEPTH_TEST:2929,DITHER:3024,POLYGON_OFFSET_FILL:32823,SAMPLE_ALPHA_TO_COVERAGE:32926,SAMPLE_COVERAGE:32928,SCISSOR_TEST:3089,STENCIL_TEST:2960,NO_ERROR:0,INVALID_ENUM:1280,INVALID_VALUE:1281,INVALID_OPERATION:1282,OUT_OF_MEMORY:1285,CONTEXT_LOST_WEBGL:37442,CW:2304,CCW:2305,DONT_CARE:4352,FASTEST:4353,NICEST:4354,GENERATE_MIPMAP_HINT:33170,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,DOUBLE:5130,DEPTH_COMPONENT:6402,ALPHA:6406,RGB:6407,RGBA:6408,LUMINANCE:6409,LUMINANCE_ALPHA:6410,UNSIGNED_SHORT_4_4_4_4:32819,UNSIGNED_SHORT_5_5_5_1:32820,UNSIGNED_SHORT_5_6_5:33635,FRAGMENT_SHADER:35632,VERTEX_SHADER:35633,COMPILE_STATUS:35713,DELETE_STATUS:35712,LINK_STATUS:35714,VALIDATE_STATUS:35715,ATTACHED_SHADERS:35717,ACTIVE_ATTRIBUTES:35721,ACTIVE_UNIFORMS:35718,MAX_VERTEX_ATTRIBS:34921,MAX_VERTEX_UNIFORM_VECTORS:36347,MAX_VARYING_VECTORS:36348,MAX_COMBINED_TEXTURE_IMAGE_UNITS:35661,MAX_VERTEX_TEXTURE_IMAGE_UNITS:35660,MAX_TEXTURE_IMAGE_UNITS:34930,MAX_FRAGMENT_UNIFORM_VECTORS:36349,SHADER_TYPE:35663,SHADING_LANGUAGE_VERSION:35724,CURRENT_PROGRAM:35725,NEVER:512,ALWAYS:519,LESS:513,EQUAL:514,LEQUAL:515,GREATER:516,GEQUAL:518,NOTEQUAL:517,KEEP:7680,REPLACE:7681,INCR:7682,DECR:7683,INVERT:5386,INCR_WRAP:34055,DECR_WRAP:34056,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,TEXTURE_MAG_FILTER:10240,TEXTURE_MIN_FILTER:10241,TEXTURE_WRAP_S:10242,TEXTURE_WRAP_T:10243,TEXTURE_2D:3553,TEXTURE:5890,TEXTURE_CUBE_MAP:34067,TEXTURE_BINDING_CUBE_MAP:34068,TEXTURE_CUBE_MAP_POSITIVE_X:34069,TEXTURE_CUBE_MAP_NEGATIVE_X:34070,TEXTURE_CUBE_MAP_POSITIVE_Y:34071,TEXTURE_CUBE_MAP_NEGATIVE_Y:34072,TEXTURE_CUBE_MAP_POSITIVE_Z:34073,TEXTURE_CUBE_MAP_NEGATIVE_Z:34074,MAX_CUBE_MAP_TEXTURE_SIZE:34076,TEXTURE0:33984,ACTIVE_TEXTURE:34016,REPEAT:10497,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,TEXTURE_WIDTH:4096,TEXTURE_HEIGHT:4097,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,INT_VEC2:35667,INT_VEC3:35668,INT_VEC4:35669,BOOL:35670,BOOL_VEC2:35671,BOOL_VEC3:35672,BOOL_VEC4:35673,FLOAT_MAT2:35674,FLOAT_MAT3:35675,FLOAT_MAT4:35676,SAMPLER_2D:35678,SAMPLER_CUBE:35680,LOW_FLOAT:36336,MEDIUM_FLOAT:36337,HIGH_FLOAT:36338,LOW_INT:36339,MEDIUM_INT:36340,HIGH_INT:36341,FRAMEBUFFER:36160,RENDERBUFFER:36161,RGBA4:32854,RGB5_A1:32855,RGB565:36194,DEPTH_COMPONENT16:33189,STENCIL_INDEX:6401,STENCIL_INDEX8:36168,DEPTH_STENCIL:34041,RENDERBUFFER_WIDTH:36162,RENDERBUFFER_HEIGHT:36163,RENDERBUFFER_INTERNAL_FORMAT:36164,RENDERBUFFER_RED_SIZE:36176,RENDERBUFFER_GREEN_SIZE:36177,RENDERBUFFER_BLUE_SIZE:36178,RENDERBUFFER_ALPHA_SIZE:36179,RENDERBUFFER_DEPTH_SIZE:36180,RENDERBUFFER_STENCIL_SIZE:36181,FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE:36048,FRAMEBUFFER_ATTACHMENT_OBJECT_NAME:36049,FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL:36050,FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE:36051,COLOR_ATTACHMENT0:36064,DEPTH_ATTACHMENT:36096,STENCIL_ATTACHMENT:36128,DEPTH_STENCIL_ATTACHMENT:33306,NONE:0,FRAMEBUFFER_COMPLETE:36053,FRAMEBUFFER_INCOMPLETE_ATTACHMENT:36054,FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:36055,FRAMEBUFFER_INCOMPLETE_DIMENSIONS:36057,FRAMEBUFFER_UNSUPPORTED:36061,FRAMEBUFFER_BINDING:36006,RENDERBUFFER_BINDING:36007,READ_FRAMEBUFFER:36008,DRAW_FRAMEBUFFER:36009,MAX_RENDERBUFFER_SIZE:34024,INVALID_FRAMEBUFFER_OPERATION:1286,UNPACK_FLIP_Y_WEBGL:37440,UNPACK_PREMULTIPLY_ALPHA_WEBGL:37441,UNPACK_COLORSPACE_CONVERSION_WEBGL:37443,READ_BUFFER:3074,UNPACK_ROW_LENGTH:3314,UNPACK_SKIP_ROWS:3315,UNPACK_SKIP_PIXELS:3316,PACK_ROW_LENGTH:3330,PACK_SKIP_ROWS:3331,PACK_SKIP_PIXELS:3332,TEXTURE_BINDING_3D:32874,UNPACK_SKIP_IMAGES:32877,UNPACK_IMAGE_HEIGHT:32878,MAX_3D_TEXTURE_SIZE:32883,MAX_ELEMENTS_VERTICES:33e3,MAX_ELEMENTS_INDICES:33001,MAX_TEXTURE_LOD_BIAS:34045,MAX_FRAGMENT_UNIFORM_COMPONENTS:35657,MAX_VERTEX_UNIFORM_COMPONENTS:35658,MAX_ARRAY_TEXTURE_LAYERS:35071,MIN_PROGRAM_TEXEL_OFFSET:35076,MAX_PROGRAM_TEXEL_OFFSET:35077,MAX_VARYING_COMPONENTS:35659,FRAGMENT_SHADER_DERIVATIVE_HINT:35723,RASTERIZER_DISCARD:35977,VERTEX_ARRAY_BINDING:34229,MAX_VERTEX_OUTPUT_COMPONENTS:37154,MAX_FRAGMENT_INPUT_COMPONENTS:37157,MAX_SERVER_WAIT_TIMEOUT:37137,MAX_ELEMENT_INDEX:36203,RED:6403,RGB8:32849,RGBA8:32856,RGB10_A2:32857,TEXTURE_3D:32879,TEXTURE_WRAP_R:32882,TEXTURE_MIN_LOD:33082,TEXTURE_MAX_LOD:33083,TEXTURE_BASE_LEVEL:33084,TEXTURE_MAX_LEVEL:33085,TEXTURE_COMPARE_MODE:34892,TEXTURE_COMPARE_FUNC:34893,SRGB:35904,SRGB8:35905,SRGB8_ALPHA8:35907,COMPARE_REF_TO_TEXTURE:34894,RGBA32F:34836,RGB32F:34837,RGBA16F:34842,RGB16F:34843,TEXTURE_2D_ARRAY:35866,TEXTURE_BINDING_2D_ARRAY:35869,R11F_G11F_B10F:35898,RGB9_E5:35901,RGBA32UI:36208,RGB32UI:36209,RGBA16UI:36214,RGB16UI:36215,RGBA8UI:36220,RGB8UI:36221,RGBA32I:36226,RGB32I:36227,RGBA16I:36232,RGB16I:36233,RGBA8I:36238,RGB8I:36239,RED_INTEGER:36244,RGB_INTEGER:36248,RGBA_INTEGER:36249,R8:33321,RG8:33323,R16F:33325,R32F:33326,RG16F:33327,RG32F:33328,R8I:33329,R8UI:33330,R16I:33331,R16UI:33332,R32I:33333,R32UI:33334,RG8I:33335,RG8UI:33336,RG16I:33337,RG16UI:33338,RG32I:33339,RG32UI:33340,R8_SNORM:36756,RG8_SNORM:36757,RGB8_SNORM:36758,RGBA8_SNORM:36759,RGB10_A2UI:36975,TEXTURE_IMMUTABLE_FORMAT:37167,TEXTURE_IMMUTABLE_LEVELS:33503,UNSIGNED_INT_2_10_10_10_REV:33640,UNSIGNED_INT_10F_11F_11F_REV:35899,UNSIGNED_INT_5_9_9_9_REV:35902,FLOAT_32_UNSIGNED_INT_24_8_REV:36269,UNSIGNED_INT_24_8:34042,HALF_FLOAT:5131,RG:33319,RG_INTEGER:33320,INT_2_10_10_10_REV:36255,CURRENT_QUERY:34917,QUERY_RESULT:34918,QUERY_RESULT_AVAILABLE:34919,ANY_SAMPLES_PASSED:35887,ANY_SAMPLES_PASSED_CONSERVATIVE:36202,MAX_DRAW_BUFFERS:34852,DRAW_BUFFER0:34853,DRAW_BUFFER1:34854,DRAW_BUFFER2:34855,DRAW_BUFFER3:34856,DRAW_BUFFER4:34857,DRAW_BUFFER5:34858,DRAW_BUFFER6:34859,DRAW_BUFFER7:34860,DRAW_BUFFER8:34861,DRAW_BUFFER9:34862,DRAW_BUFFER10:34863,DRAW_BUFFER11:34864,DRAW_BUFFER12:34865,DRAW_BUFFER13:34866,DRAW_BUFFER14:34867,DRAW_BUFFER15:34868,MAX_COLOR_ATTACHMENTS:36063,COLOR_ATTACHMENT1:36065,COLOR_ATTACHMENT2:36066,COLOR_ATTACHMENT3:36067,COLOR_ATTACHMENT4:36068,COLOR_ATTACHMENT5:36069,COLOR_ATTACHMENT6:36070,COLOR_ATTACHMENT7:36071,COLOR_ATTACHMENT8:36072,COLOR_ATTACHMENT9:36073,COLOR_ATTACHMENT10:36074,COLOR_ATTACHMENT11:36075,COLOR_ATTACHMENT12:36076,COLOR_ATTACHMENT13:36077,COLOR_ATTACHMENT14:36078,COLOR_ATTACHMENT15:36079,SAMPLER_3D:35679,SAMPLER_2D_SHADOW:35682,SAMPLER_2D_ARRAY:36289,SAMPLER_2D_ARRAY_SHADOW:36292,SAMPLER_CUBE_SHADOW:36293,INT_SAMPLER_2D:36298,INT_SAMPLER_3D:36299,INT_SAMPLER_CUBE:36300,INT_SAMPLER_2D_ARRAY:36303,UNSIGNED_INT_SAMPLER_2D:36306,UNSIGNED_INT_SAMPLER_3D:36307,UNSIGNED_INT_SAMPLER_CUBE:36308,UNSIGNED_INT_SAMPLER_2D_ARRAY:36311,MAX_SAMPLES:36183,SAMPLER_BINDING:35097,PIXEL_PACK_BUFFER:35051,PIXEL_UNPACK_BUFFER:35052,PIXEL_PACK_BUFFER_BINDING:35053,PIXEL_UNPACK_BUFFER_BINDING:35055,COPY_READ_BUFFER:36662,COPY_WRITE_BUFFER:36663,COPY_READ_BUFFER_BINDING:36662,COPY_WRITE_BUFFER_BINDING:36663,FLOAT_MAT2x3:35685,FLOAT_MAT2x4:35686,FLOAT_MAT3x2:35687,FLOAT_MAT3x4:35688,FLOAT_MAT4x2:35689,FLOAT_MAT4x3:35690,UNSIGNED_INT_VEC2:36294,UNSIGNED_INT_VEC3:36295,UNSIGNED_INT_VEC4:36296,UNSIGNED_NORMALIZED:35863,SIGNED_NORMALIZED:36764,VERTEX_ATTRIB_ARRAY_INTEGER:35069,VERTEX_ATTRIB_ARRAY_DIVISOR:35070,TRANSFORM_FEEDBACK_BUFFER_MODE:35967,MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS:35968,TRANSFORM_FEEDBACK_VARYINGS:35971,TRANSFORM_FEEDBACK_BUFFER_START:35972,TRANSFORM_FEEDBACK_BUFFER_SIZE:35973,TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN:35976,MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS:35978,MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS:35979,INTERLEAVED_ATTRIBS:35980,SEPARATE_ATTRIBS:35981,TRANSFORM_FEEDBACK_BUFFER:35982,TRANSFORM_FEEDBACK_BUFFER_BINDING:35983,TRANSFORM_FEEDBACK:36386,TRANSFORM_FEEDBACK_PAUSED:36387,TRANSFORM_FEEDBACK_ACTIVE:36388,TRANSFORM_FEEDBACK_BINDING:36389,FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING:33296,FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE:33297,FRAMEBUFFER_ATTACHMENT_RED_SIZE:33298,FRAMEBUFFER_ATTACHMENT_GREEN_SIZE:33299,FRAMEBUFFER_ATTACHMENT_BLUE_SIZE:33300,FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE:33301,FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE:33302,FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE:33303,FRAMEBUFFER_DEFAULT:33304,DEPTH24_STENCIL8:35056,DRAW_FRAMEBUFFER_BINDING:36006,READ_FRAMEBUFFER_BINDING:36010,RENDERBUFFER_SAMPLES:36011,FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER:36052,FRAMEBUFFER_INCOMPLETE_MULTISAMPLE:36182,UNIFORM_BUFFER:35345,UNIFORM_BUFFER_BINDING:35368,UNIFORM_BUFFER_START:35369,UNIFORM_BUFFER_SIZE:35370,MAX_VERTEX_UNIFORM_BLOCKS:35371,MAX_FRAGMENT_UNIFORM_BLOCKS:35373,MAX_COMBINED_UNIFORM_BLOCKS:35374,MAX_UNIFORM_BUFFER_BINDINGS:35375,MAX_UNIFORM_BLOCK_SIZE:35376,MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS:35377,MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS:35379,UNIFORM_BUFFER_OFFSET_ALIGNMENT:35380,ACTIVE_UNIFORM_BLOCKS:35382,UNIFORM_TYPE:35383,UNIFORM_SIZE:35384,UNIFORM_BLOCK_INDEX:35386,UNIFORM_OFFSET:35387,UNIFORM_ARRAY_STRIDE:35388,UNIFORM_MATRIX_STRIDE:35389,UNIFORM_IS_ROW_MAJOR:35390,UNIFORM_BLOCK_BINDING:35391,UNIFORM_BLOCK_DATA_SIZE:35392,UNIFORM_BLOCK_ACTIVE_UNIFORMS:35394,UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES:35395,UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER:35396,UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER:35398,OBJECT_TYPE:37138,SYNC_CONDITION:37139,SYNC_STATUS:37140,SYNC_FLAGS:37141,SYNC_FENCE:37142,SYNC_GPU_COMMANDS_COMPLETE:37143,UNSIGNALED:37144,SIGNALED:37145,ALREADY_SIGNALED:37146,TIMEOUT_EXPIRED:37147,CONDITION_SATISFIED:37148,WAIT_FAILED:37149,SYNC_FLUSH_COMMANDS_BIT:1,COLOR:6144,DEPTH:6145,STENCIL:6146,MIN:32775,MAX:32776,DEPTH_COMPONENT24:33190,STREAM_READ:35041,STREAM_COPY:35042,STATIC_READ:35045,STATIC_COPY:35046,DYNAMIC_READ:35049,DYNAMIC_COPY:35050,DEPTH_COMPONENT32F:36012,DEPTH32F_STENCIL8:36013,INVALID_INDEX:4294967295,TIMEOUT_IGNORED:-1,MAX_CLIENT_WAIT_TIMEOUT_WEBGL:37447,VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE:35070,UNMASKED_VENDOR_WEBGL:37445,UNMASKED_RENDERER_WEBGL:37446,MAX_TEXTURE_MAX_ANISOTROPY_EXT:34047,TEXTURE_MAX_ANISOTROPY_EXT:34046,COMPRESSED_RGB_S3TC_DXT1_EXT:33776,COMPRESSED_RGBA_S3TC_DXT1_EXT:33777,COMPRESSED_RGBA_S3TC_DXT3_EXT:33778,COMPRESSED_RGBA_S3TC_DXT5_EXT:33779,COMPRESSED_R11_EAC:37488,COMPRESSED_SIGNED_R11_EAC:37489,COMPRESSED_RG11_EAC:37490,COMPRESSED_SIGNED_RG11_EAC:37491,COMPRESSED_RGB8_ETC2:37492,COMPRESSED_RGBA8_ETC2_EAC:37493,COMPRESSED_SRGB8_ETC2:37494,COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:37495,COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2:37496,COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2:37497,COMPRESSED_RGB_PVRTC_4BPPV1_IMG:35840,COMPRESSED_RGBA_PVRTC_4BPPV1_IMG:35842,COMPRESSED_RGB_PVRTC_2BPPV1_IMG:35841,COMPRESSED_RGBA_PVRTC_2BPPV1_IMG:35843,COMPRESSED_RGB_ETC1_WEBGL:36196,COMPRESSED_RGB_ATC_WEBGL:35986,COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL:35986,COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL:34798,UNSIGNED_INT_24_8_WEBGL:34042,HALF_FLOAT_OES:36193,RGBA32F_EXT:34836,RGB32F_EXT:34837,FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT:33297,UNSIGNED_NORMALIZED_EXT:35863,MIN_EXT:32775,MAX_EXT:32776,SRGB_EXT:35904,SRGB_ALPHA_EXT:35906,SRGB8_ALPHA8_EXT:35907,FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT:33296,FRAGMENT_SHADER_DERIVATIVE_HINT_OES:35723,COLOR_ATTACHMENT0_WEBGL:36064,COLOR_ATTACHMENT1_WEBGL:36065,COLOR_ATTACHMENT2_WEBGL:36066,COLOR_ATTACHMENT3_WEBGL:36067,COLOR_ATTACHMENT4_WEBGL:36068,COLOR_ATTACHMENT5_WEBGL:36069,COLOR_ATTACHMENT6_WEBGL:36070,COLOR_ATTACHMENT7_WEBGL:36071,COLOR_ATTACHMENT8_WEBGL:36072,COLOR_ATTACHMENT9_WEBGL:36073,COLOR_ATTACHMENT10_WEBGL:36074,COLOR_ATTACHMENT11_WEBGL:36075,COLOR_ATTACHMENT12_WEBGL:36076,COLOR_ATTACHMENT13_WEBGL:36077,COLOR_ATTACHMENT14_WEBGL:36078,COLOR_ATTACHMENT15_WEBGL:36079,DRAW_BUFFER0_WEBGL:34853,DRAW_BUFFER1_WEBGL:34854,DRAW_BUFFER2_WEBGL:34855,DRAW_BUFFER3_WEBGL:34856,DRAW_BUFFER4_WEBGL:34857,DRAW_BUFFER5_WEBGL:34858,DRAW_BUFFER6_WEBGL:34859,DRAW_BUFFER7_WEBGL:34860,DRAW_BUFFER8_WEBGL:34861,DRAW_BUFFER9_WEBGL:34862,DRAW_BUFFER10_WEBGL:34863,DRAW_BUFFER11_WEBGL:34864,DRAW_BUFFER12_WEBGL:34865,DRAW_BUFFER13_WEBGL:34866,DRAW_BUFFER14_WEBGL:34867,DRAW_BUFFER15_WEBGL:34868,MAX_COLOR_ATTACHMENTS_WEBGL:36063,MAX_DRAW_BUFFERS_WEBGL:34852,VERTEX_ARRAY_BINDING_OES:34229,QUERY_COUNTER_BITS_EXT:34916,CURRENT_QUERY_EXT:34917,QUERY_RESULT_EXT:34918,QUERY_RESULT_AVAILABLE_EXT:34919,TIME_ELAPSED_EXT:35007,TIMESTAMP_EXT:36392,GPU_DISJOINT_EXT:36795}},O36U:function(e,t,E){"use strict";E.d(t,"a",(function(){return S}));var r=E("o0o1"),_=E.n(r),n=(E("wcNg"),E("HaE+")),R=E("rePB"),T=E("24Wh"),a=E("kEb9");function o(e){return i.apply(this,arguments)}function i(){return(i=Object(n.a)(_.a.mark((function e(t){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",JSON.parse((new TextDecoder).decode(t)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var A={name:"I3S Node Page",id:"i3s-node-page",module:"i3s",version:"undefined"!=typeof __VERSION__?__VERSION__:"latest",mimeTypes:["application/json"],parse:function(e){return s.apply(this,arguments)},extensions:["json"],options:{}};function s(){return(s=Object(n.a)(_.a.mark((function e(t){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o(t),e.abrupt("return",t);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var u=E("/Xah"),N=E("ipMt");function c(e,t){var E;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(E=function(e,t){if(!e)return;if("string"==typeof e)return I(e,t);var E=Object.prototype.toString.call(e).slice(8,-1);"Object"===E&&e.constructor&&(E=e.constructor.name);if("Map"===E||"Set"===E)return Array.from(e);if("Arguments"===E||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(E))return I(e,t)}(e))||t&&e&&"number"==typeof e.length){E&&(e=E);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(E=e[Symbol.iterator]()).next.bind(E)}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var E=0,r=new Array(t);E<t;E++)r[E]=e[E];return r}function O(e,t){var E=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),E.push.apply(E,r)}return E}var S=function(){function e(e,t){void 0===t&&(t={}),this.tileset=function(e){for(var t=1;t<arguments.length;t++){var E=null!=arguments[t]?arguments[t]:{};t%2?O(Object(E),!0).forEach((function(t){Object(R.a)(e,t,E[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(E)):O(Object(E)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(E,t))}))}return e}({},e),this.nodesPerPage=e.nodePages.nodesPerPage,this.lodSelectionMetricType=e.nodePages.lodSelectionMetricType,this.options=t,this.nodePages=[],this.textureDefinitionsSelectedFormats=[],this._initSelectedFormatsForTextureDefinitions(e)}var t=e.prototype;return t.getNodeById=function(){var e=Object(n.a)(_.a.mark((function e(t){var E,r,n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(E=Math.floor(t/this.nodesPerPage),this.nodePages[E]){e.next=7;break}return r=Object(u.c)(this.tileset.url+"/nodepages/"+E,this.options.token),this.nodePages[E]=Object(T.a)(r,A,this.options),e.next=6,this.nodePages[E];case 6:this.nodePages[E]=e.sent;case 7:if(!(this.nodePages[E]instanceof Promise)){e.next=11;break}return e.next=10,this.nodePages[E];case 10:this.nodePages[E]=e.sent;case 11:return n=t%this.nodesPerPage,e.abrupt("return",this.nodePages[E].nodes[n]);case 13:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),t.formTileFromNodePages=function(){var e=Object(n.a)(_.a.mark((function e(t){var E,r,n,R,T,o,i,A,s,N,I,O,S,l,M,F,C,U,L;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getNodeById(t);case 2:E=e.sent,r=[],n=c(E.children||[]);case 5:if((R=n()).done){e.next=13;break}return T=R.value,e.next=9,this.getNodeById(T);case 9:o=e.sent,r.push({id:T,obb:o.obb});case 11:e.next=5;break;case 13:return i=null,A=null,s=null,N="jpeg",I=[],O=!1,E&&E.mesh&&(S=E.mesh.geometry&&this._getContentUrl(E.mesh.geometry)||{url:null,isDracoGeometry:null},l=S.url,M=S.isDracoGeometry,i=l,O=M,F=this._getInformationFromMaterial(E.mesh.material),C=F[0],U=F[1],s=U,N=C.format||N,C.name&&(A=this.tileset.url+"/nodes/"+E.mesh.material.resource+"/textures/"+C.name),this.tileset.attributeStorageInfo&&(I=Object(u.b)(this.tileset,E.mesh.attribute.resource))),L=this._getLodSelection(E),e.abrupt("return",Object(a.b)({id:t,lodSelection:L,obb:E.obb,contentUrl:i,textureUrl:A,attributeUrls:I,materialDefinition:s,textureFormat:N,children:r,isDracoGeometry:O}));case 22:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),t._getContentUrl=function(e){var t={},E=this.tileset.geometryDefinitions[e.definition],r=-1;if(this.options.i3s&&this.options.i3s.useDracoGeometry&&(r=E.geometryBuffers.findIndex((function(e){return e.compressedAttributes&&"draco"===e.compressedAttributes.encoding}))),-1===r&&(r=E.geometryBuffers.findIndex((function(e){return!e.compressedAttributes}))),-1!==r){var _=Boolean(E.geometryBuffers[r].compressedAttributes);t={url:this.tileset.url+"/nodes/"+e.resource+"/geometries/"+r,isDracoGeometry:_}}return t},t._getLodSelection=function(e){var t=[];return"maxScreenThresholdSQ"===this.lodSelectionMetricType&&t.push({metricType:"maxScreenThreshold",maxError:Math.sqrt(e.lodThreshold/(.25*Math.PI))}),t.push({metricType:this.lodSelectionMetricType,maxError:e.lodThreshold}),t},t._getInformationFromMaterial=function(e){var t={name:null,format:null};if(e){var E=this.tileset.materialDefinitions[e.definition],r=E&&E.pbrMetallicRoughness&&E.pbrMetallicRoughness.baseColorTexture&&E.pbrMetallicRoughness.baseColorTexture.textureSetDefinitionId;return r||0===r?[this.textureDefinitionsSelectedFormats[r]||t,E]:[t,E]}return[t,null]},t._initSelectedFormatsForTextureDefinitions=function(e){this.textureDefinitionsSelectedFormats=[];for(var t,E=this._getSupportedTextureFormats(),r=c(e.textureSetDefinitions||[]);!(t=r()).done;){for(var _,n=t.value,R=n&&n.formats||[],T=null,a=function(){var e=_.value,t=R.find((function(t){return t.format===e}));if(t)return T=t,"break"},o=c(E);!(_=o()).done;){if("break"===a())break}this.textureDefinitionsSelectedFormats.push(T)}},t._getSupportedTextureFormats=function(e){void 0===e&&(e={});var t=[];if(!this.options.i3s||this.options.i3s.useCompressedTextures){var E=Object(N.a)();E.has("etc2")&&t.push("ktx-etc2"),E.has("dxt")&&t.push("dds")}return t.push("jpg"),t.push("png"),t},e}()},URgk:function(e,t,E){(function(e){var r=void 0!==e&&e||"undefined"!=typeof self&&self||window,_=Function.prototype.apply;function n(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new n(_.call(setTimeout,r,arguments),clearTimeout)},t.setInterval=function(){return new n(_.call(setInterval,r,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},n.prototype.unref=n.prototype.ref=function(){},n.prototype.close=function(){this._clearFn.call(r,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},E("YBdB"),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,E("yLpj"))},YBdB:function(e,t,E){(function(e,t){!function(e,E){"use strict";if(!e.setImmediate){var r,_,n,R,T,a=1,o={},i=!1,A=e.document,s=Object.getPrototypeOf&&Object.getPrototypeOf(e);s=s&&s.setTimeout?s:e,"[object process]"==={}.toString.call(e.process)?r=function(e){t.nextTick((function(){N(e)}))}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,E=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=E,t}}()?e.MessageChannel?((n=new MessageChannel).port1.onmessage=function(e){N(e.data)},r=function(e){n.port2.postMessage(e)}):A&&"onreadystatechange"in A.createElement("script")?(_=A.documentElement,r=function(e){var t=A.createElement("script");t.onreadystatechange=function(){N(e),t.onreadystatechange=null,_.removeChild(t),t=null},_.appendChild(t)}):r=function(e){setTimeout(N,0,e)}:(R="setImmediate$"+Math.random()+"$",T=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(R)&&N(+t.data.slice(R.length))},e.addEventListener?e.addEventListener("message",T,!1):e.attachEvent("onmessage",T),r=function(t){e.postMessage(R+t,"*")}),s.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),E=0;E<t.length;E++)t[E]=arguments[E+1];var _={callback:e,args:t};return o[a]=_,r(a),a++},s.clearImmediate=u}function u(e){delete o[e]}function N(e){if(i)setTimeout(N,0,e);else{var t=o[e];if(t){i=!0;try{!function(e){var t=e.callback,E=e.args;switch(E.length){case 0:t();break;case 1:t(E[0]);break;case 2:t(E[0],E[1]);break;case 3:t(E[0],E[1],E[2]);break;default:t.apply(void 0,E)}}(t)}finally{u(e),i=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,E("yLpj"),E("8oxB"))},kEb9:function(e,t,E){"use strict";E.d(t,"a",(function(){return u})),E.d(t,"b",(function(){return N})),E.d(t,"c",(function(){return c}));var r=E("o0o1"),_=E.n(r),n=(E("wcNg"),E("HaE+")),R=E("KQm4"),T=E("rOwd"),a=E("Ns70"),o=E("24Wh"),i=E("O6hP"),A=E("O36U"),s=E("/Xah");function u(e,t,E){return e.url=E.url,e.featureData&&(e.featureUrl=e.url+"/"+e.featureData[0].href),e.geometryData&&(e.contentUrl=e.url+"/"+e.geometryData[0].href),e.textureData&&(e.textureUrl=e.url+"/"+e.textureData[0].href),e.attributeData&&(e.attributeUrls=Object(s.a)(e)),N(e)}function N(e){var t,E=e.obb?[].concat(Object(R.a)(a.a.WGS84.cartographicToCartesian(e.obb.center)),Object(R.a)(e.obb.halfSize),Object(R.a)(e.obb.quaternion)):void 0;if(e.mbs)t=[].concat(Object(R.a)(a.a.WGS84.cartographicToCartesian(e.mbs.slice(0,3))),[e.mbs[3]]);else if(E){var r=(new T.c).fromCenterHalfSizeQuaternion(E.slice(0,3),e.obb.halfSize,e.obb.quaternion).getBoundingSphere();t=[].concat(Object(R.a)(r.center),[r.radius]),e.mbs=[].concat(Object(R.a)(e.obb.center),[r.radius])}return e.boundingVolume={sphere:t,box:E},e.lodMetricType=e.lodSelection[0].metricType,e.lodMetricValue=e.lodSelection[0].maxError,e.transformMatrix=e.transform,e.type=i.f.MESH,e.refine=i.e.REPLACE,e}function c(e,t,E){return I.apply(this,arguments)}function I(){return(I=Object(n.a)(_.a.mark((function e(t,E,r){var n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.url=r.url,!t.nodePages){e.next=8;break}return t.nodePagesTile=new A.a(t,E),e.next=5,t.nodePagesTile.formTileFromNodePages(0);case 5:t.root=e.sent,e.next=12;break;case 8:return n=Object(s.c)(t.url+"/nodes/root",E.token),e.next=11,Object(o.a)(n,t.loader,{i3s:{loadContent:!1,isTileHeader:!0,isTileset:!1}});case 11:t.root=e.sent;case 12:t.basePath=t.url,t.type=i.c.I3S,t.lodMetricType=t.root.lodMetricType,t.lodMetricValue=t.root.lodMetricValue;case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},lese:function(e,t,E){"use strict";E.d(t,"a",(function(){return j}));var r=E("o0o1"),_=E.n(r),n=(E("wcNg"),E("HaE+")),R=E("24Wh"),T=E("pUAI"),a=E("KQm4"),o=E("rePB"),i=E("zXfU"),A=E("Nw31"),s=E("Ns70"),u=E("gQyj"),N=E("1Nab"),c=E("2Daz"),I=E("/Xah"),O=E("+PVp");function S(e,t){var E;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(E=function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var E=Object.prototype.toString.call(e).slice(8,-1);"Object"===E&&e.constructor&&(E=e.constructor.name);if("Map"===E||"Set"===E)return Array.from(e);if("Arguments"===E||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(E))return l(e,t)}(e))||t&&e&&"number"==typeof e.length){E&&(e=E);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(E=e[Symbol.iterator]()).next.bind(E)}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var E=0,r=new Array(t);E<t;E++)r[E]=e[E];return r}function M(e,t){var E=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),E.push.apply(E,r)}return E}function F(e){for(var t=1;t<arguments.length;t++){var E=null!=arguments[t]?arguments[t]:{};t%2?M(Object(E),!0).forEach((function(t){Object(o.a)(e,t,E[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(E)):M(Object(E)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(E,t))}))}return e}var C=new i.a([0,0,0]),U={jpeg:u.a,png:u.a,"ktx-etc2":O.a,dds:O.a};function L(e,t,E,r){return B.apply(this,arguments)}function B(){return(B=Object(n.a)(_.a.mark((function e(t,E,r,n){var T,a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(E.content=E.content||{},E.content.segmentationData=E.content.segmentationData||null,E.content.featureData=d(E,r),E.content.attributes={},!E.textureUrl){e.next=11;break}return T=Object(I.c)(E.textureUrl,n.token),a=U[E.textureFormat]||u.a,e.next=9,Object(R.a)(T,a);case 9:E.content.texture=e.sent,a===O.a&&(E.content.texture={compressed:!0,mipmaps:!1,width:E.content.texture[0].width,height:E.content.texture[0].height,data:E.content.texture});case 11:return E.content.material=m(E.materialDefinition,E.content.texture),E.content.material&&(E.content.texture=null),e.next=15,D(t,E,n);case 15:return e.abrupt("return",e.sent);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e,t,E){return f.apply(this,arguments)}function f(){return(f=Object(n.a)(_.a.mark((function e(t,E,r){var n,R,a,o,i,s,u,c,I,O,S,l,M,F,C,U,L,B,D,f,d,m,g,H,x,W,V,w,Y,j,K,k;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===E&&(E={}),E.content){e.next=3;break}return e.abrupt("return",E);case 3:if(n=E.content,o=0,i=0,!E.isDracoGeometry){e.next=18;break}return e.next=9,Object(T.a)(t,N.a,{parseOptions:{attributeNameEntry:"i3s-attribute-type"}});case 9:s=e.sent,a=s.header.vertexCount,u=s.indices.value,c=s.attributes,I=c.POSITION,O=c.NORMAL,S=c.COLOR_0,l=c.TEXCOORD_0,M=c["feature-index"],F=c["uv-region"],R={position:I,normal:O,color:S,uv0:l,uvRegion:F,id:M,indices:u},(C=X(M))&&y(R,C),e.next=27;break;case 18:U=n.featureData,L=U.vertexAttributes,B=U.attributesOrder,D=U.featureAttributes,f=U.featureAttributeOrder,d=G(n,t),o=d.byteOffset,a=d.vertexCount,i=d.featureCount,m=b(t,o,L,a,B),g=m.attributes,H=m.byteOffset,x=b(t,H,D,i,f),v(W=x.attributes),R=P(g,W);case 27:for(k in V=h(R.position,E),w=V.enuMatrix,Y=V.cartographicOrigin,j=V.cartesianOrigin,K=(new A.a).multiplyRight(w),n.attributes={positions:R.position,normals:R.normal,colors:p(R.color),texCoords:R.uv0,uvRegions:p(R.uvRegion)},n.indices=R.indices||null,R.id&&R.id.value&&(E.content.segmentationData=R.id.value),n.attributes)n.attributes[k]||delete n.attributes[k];return n.vertexCount=a,n.cartographicCenter=Y,n.cartesianOrigin=j,n.modelMatrix=K.invert(),n.byteLength=t.byteLength,e.abrupt("return",E);case 39:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(e,t){return F(F({},e),t)}function p(e){return e?(e.normalized=!0,e):e}function d(e,t){var E=t.store.defaultGeometrySchema,r=E;for(var _ in c.c)for(var n in c.e){var R=E[_][n];if(R){var T=R.byteOffset,a=void 0===T?0:T,o=R.count,i=void 0===o?0:o,A=R.valueType,s=R.valuesPerElement;r[_][n]={valueType:A,valuesPerElement:s,byteOffset:a,count:i}}}return r.attributesOrder=E.ordering,r}function G(e,t){var E=0,r=0,_=0,n=e.featureData[c.d.header];for(var R in n){var T=n[R],a=T.property,o=T.type,i=c.i[o];a===c.d.vertexCount&&(r=new i(t,0,4)[0],E+=c.g[o]),a===c.d.featureCount&&(_=new i(t,4,4)[0],E+=c.g[o])}return{vertexCount:r,featureCount:_,byteOffset:E}}function b(e,t,E,r,_){for(var n,R={},T=S(_);!(n=T()).done;){var a=n.value;if(E[a]){var o=E[a],i=o.valueType,A=o.valuesPerElement,s=r;if(t+s*A>e.byteLength)break;var u=new(0,c.i[i])(e.slice(t),0,s*A);switch(R[a]={value:u,type:c.b[i],size:A},a){case"color":R.color.normalized=!0}t+=s*A*c.g[i]}}return{attributes:R,byteOffset:t}}function h(e,t){var E=t.mbs,r=e.value,_=e.metadata,n=new A.a,R=new i.a(E[0],E[1],E[2]),T=new i.a;return s.a.WGS84.cartographicToCartesian(R,T),s.a.WGS84.eastNorthUpToFixedFrame(T,n),e.value=function(e,t,E){void 0===t&&(t={});for(var r=new Float64Array(e.length),_=t["i3s-scale_x"]&&t["i3s-scale_x"].double||1,n=t["i3s-scale_y"]&&t["i3s-scale_y"].double||1,R=0;R<r.length;R+=3)r[R]=e[R]*_+E.x,r[R+1]=e[R+1]*n+E.y,r[R+2]=e[R+2]+E.z;for(var T=0;T<r.length;T+=3)s.a.WGS84.cartographicToCartesian(r.subarray(T,T+3),C),r[T]=C.x,r[T+1]=C.y,r[T+2]=C.z;return r}(r,_,R),{enuMatrix:n,fixedFrameToENUMatrix:n.invert(),cartographicOrigin:R,cartesianOrigin:T}}function m(e,t){var E;return e?E=F(F({},e),{},{pbrMetallicRoughness:e.pbrMetallicRoughness?F({},e.pbrMetallicRoughness):{baseColorFactor:[255,255,255,255]}}):(E={pbrMetallicRoughness:{}},t?E.pbrMetallicRoughness.baseColorTexture={texCoord:0}:E.pbrMetallicRoughness.baseColorFactor=[255,255,255,255]),E.alphaCutoff=E.alphaCutoff||.25,E.alphaMode&&(E.alphaMode=E.alphaMode.toUpperCase()),E.emissiveFactor&&(E.emissiveFactor=g(E.emissiveFactor)),E.pbrMetallicRoughness&&E.pbrMetallicRoughness.baseColorFactor&&(E.pbrMetallicRoughness.baseColorFactor=g(E.pbrMetallicRoughness.baseColorFactor)),function(e,t){var E={source:{image:t}};e.pbrMetallicRoughness&&e.pbrMetallicRoughness.baseColorTexture?e.pbrMetallicRoughness.baseColorTexture=F(F({},e.pbrMetallicRoughness.baseColorTexture),{},{texture:E}):e.emissiveTexture?e.emissiveTexture=F(F({},e.emissiveTexture),{},{texture:E}):e.pbrMetallicRoughness&&e.pbrMetallicRoughness.metallicRoughnessTexture?e.pbrMetallicRoughness.metallicRoughnessTexture=F(F({},e.pbrMetallicRoughness.metallicRoughnessTexture),{},{texture:E}):e.normalTexture?e.normalTexture=F(F({},e.normalTexture),{},{texture:E}):e.occlusionTexture&&(e.occlusionTexture=F(F({},e.occlusionTexture),{},{texture:E}))}(E,t),E}function g(e){for(var t=Object(a.a)(e),E=0;E<e.length;E++)t[E]=e[E]/255;return t}function v(e){var t=e.id,E=e.faceRange;if(t&&E){for(var r=t.value,_=E.value,n=_[_.length-1]+1,R=new Uint32Array(3*n),T=0,a=0,o=1;o<_.length;o+=2){var i=Number(r[T]),A=a+3*(_[o]-_[o-1]+1);R.fill(i,a,A),T++,a=A}e.id.value=R}}function y(e,t){for(var E=e.id.value,r=new Float32Array(E.length),_=0;_<E.length;_++)r[_]=t[E[_]];e.id.value=r}function X(e){return e&&e.metadata&&e.metadata["i3s-feature-ids"]&&e.metadata["i3s-feature-ids"].intArray}var H={name:"I3S Content (Indexed Scene Layers)",id:"i3s-content",module:"i3s",worker:!0,version:"undefined"!=typeof __VERSION__?__VERSION__:"beta",mimeTypes:["application/octet-stream"],parse:function(e,t){return x.apply(this,arguments)},extensions:["bin"],options:{"i3s-content":{}}};function x(){return(x=Object(n.a)(_.a.mark((function e(t,E){var r,n,R;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=E.i3s,n=r.tile,R=r.tileset,e.next=3,L(t,n,R,E);case 3:return e.abrupt("return",n.content);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var W=E("kEb9"),V="undefined"!=typeof __VERSION__?__VERSION__:"latest",w=/layers\/[0-9]+$/,Y=/nodes\/([0-9-]+|root)$/,j={name:"I3S (Indexed Scene Layers)",id:"i3s",module:"i3s",version:V,mimeTypes:["application/octet-stream"],parse:function(e,t,E,r){return K.apply(this,arguments)},extensions:["bin"],options:{i3s:{loadContent:!0,isTileset:"auto",isTileHeader:"auto",tile:null,tileset:null,useDracoGeometry:!0,useCompressedTextures:!0}}};function K(){return(K=Object(n.a)(_.a.mark((function e(t,E,r,n){var T,a,o;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(T=r.url,E.i3s=E.i3s||{},a="auto"===E.i3s.isTileset?w.test(T):E.i3s.isTileset,o="auto"===E.isTileHeader?Y.test(T):E.i3s.isTileHeader,!a){e.next=10;break}return e.next=7,Q(t,E,r);case 7:t=e.sent,e.next=23;break;case 10:if(!o){e.next=20;break}return e.next=13,J(t,E,r);case 13:if(t=e.sent,!E.i3s.loadContent){e.next=18;break}return E.i3s.tile=t,e.next=18,Object(R.a)(t.contentUrl,j,E);case 18:e.next=23;break;case 20:return e.next=22,k(t,E,r);case 22:t=e.sent;case 23:return e.abrupt("return",t);case 24:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e,t,E){return Z.apply(this,arguments)}function Z(){return(Z=Object(n.a)(_.a.mark((function e(t,E,r){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(T.a)(t,H,E);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Q(e,t,E){return z.apply(this,arguments)}function z(){return(z=Object(n.a)(_.a.mark((function e(t,E,r){var n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=JSON.parse((new TextDecoder).decode(t))).loader=j,e.next=4,Object(W.c)(n,E,r);case 4:return e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(e,t,E){return $.apply(this,arguments)}function $(){return($=Object(n.a)(_.a.mark((function e(t,E,r){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=JSON.parse((new TextDecoder).decode(t)),e.abrupt("return",Object(W.a)(t,E,r));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);