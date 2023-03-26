module.exports = {
    moduleName : 'Directive',
        requestParam : {
            messages : {
                formatError : 'Request format "{0}" has not been supported, please set format to hex, string or form',
            },
            type : {
                hex : 'Hex',
                string : 'String',
                form : 'Form',
            },
            hex : {
                contentEmpty : 'No content to send',
                
            },
        },
        main : {
            button : {
                closeThis : 'Close This',
                closeOthers : 'Close Others',
                closeAll : 'Close All',
                copyName : 'Copy Name',
                copyPathName : 'Copy Path Name',
                duplicateThis : 'Duplicate This',
                createNew : 'Create New',
            },
            changedDirectiveCloseConfirm : 'this directive has changed, do you want to save it ?',
            directiveNameCopySuccessed : 'Directive name copied.',
            directivePathNameCopySuccessed : 'Directive path name copied.',
            directivePathNameCopyFailedUnsaved : 'Failed to copy directive path name : directive unsaved',
        },
        
    name : 'Name',
    nameDefault : 'Untitled',
    descriotion : 'Descriotion',
    atributesLabel : 'Attributes',
    atributeName : 'Name',
    atributeValue : 'Value',
    endiannessLabel : 'Endianness',
    endiannessBigEndian : 'Big Endian',
    endiannessLittleEndian : 'Little Endian',
    charset : 'Charset',
    requestCharset : 'Request Charset',
    responseCharset : 'Response Charset',
    nlstyleLabel : 'New Line Style',
    nlstyleDefaultName : 'Default',
    configTitle : 'Directive Config',
    communicator : require('@/modules/directive/communicators/I18nRegistry.js').en,
    quickCallCrc16modbus : '<DEC> crc16modbus ($item, ...)',
    quickCallRandom : '<DEC> random(min,max)',
    quickCallLrc : '<DEC> lrc(items, ...)',
    quickCallChecksum8 : '<DEC> checksum8(items, ...)',
    quickCallBcc : '<DEC> bcc(items, ...)',
    quickCallFill : '<TEXT> fill(content,count)',
    quickCallCrc1 : '<DEC> crc1($item, ...)',
    quickCallCrc8 : '<DEC> crc8($item, ...)',
    quickCallCrc81wire : '<DEC> crc81wire($item, ...)',
    quickCallCrc16 : '<DEC> crc16($item, ...)',
    quickCallCrc16ccitt : '<DEC> crc16ccitt($item, ...)',
    quickCallCrc16xmodem : '<DEC> crc16xmodem($item, ...)',
    quickCallCrc16kermit : '<DEC> crc16kermit($item, ...)',
    quickCallCrc24 : '<DEC> crc24($item, ...)',
    quickCallCrc32 : '<DEC> crc32($item, ...)',
    quickCallCrcjam : '<DEC> crcjam($item, ...)',
    quickCallCrc32mpeg2 : '<DEC> crc32mpeg2($item, ...)',
    quickCallDate : '<TEXT> date(format)',
    quickCallLengthsum : '<DEC> lengthsum($item, ...)',
    statusPopoverTitle : 'Directive Status',
    statusClear : 'Clear',
    statusViewerButton : 'Status',
    parameter : {
        statusNameNotExists : 'Directive status name "{0}" does not exists',
        parameterIndexNotExists : 'In "{0}" the quick call "{1}" parameter index "${2}" does not exists.',
        parameterIndexNotAvailable : 'In "{0}" the quick call "{1}" parameter index "{2}" is not supported, Only numbers are supported.',
        parseStringFailed : 'failed to parse string "{0}" : {1}',
        executeScriptFailed : 'failed to execute script : {0}',
        projectScriptObjectGenerateFailed : 'failed to build project script : {0}',
        quickFunctionNameInvalid : 'invalid quick function name : {0}',
        buildHandlerNotAvailable : 'invalid parameter build handler : {0}',
        notRequired : 'Parameter is not required',
        editorNotAvailable : 'Parameter editor is not available',
        none : {
            name : 'None',
            notRequired : 'Parameter is not required.',
        },
        form : {
            name : 'Form',
            fieldName : 'Name',
            filedType : 'Type',
            filedValue : 'Value',
            filedDesc : 'Description',
            filedOperations : 'Options',
            propValueMustBeAnInstanceOfMdbDirective : 'value of prop v-model must be an instance of MdbDirective.',
            preserveFieldFilter : 'Field Filter',
            dataTypeLabel : 'Data Type',
            dataTypeBitsLength : 'Length',
            dataTypeBitsOverLenght : 'value of Bits "{0}" is longer than given length "{1}"',
            dataTypeBitsNotMatchToByte : 'Bits length must be a multiple of 8',
            fieldNotConfigured : 'Form is not configured',
            fieldSetting : 'Field Setting',
            fieldSettingFailed : 'Field Setting Failed',
            fieldValueSelectOptions : 'Value Options',
            fieldValueSelectOptionName : 'Option Name',
            fieldValueSelectOptionValue : 'Option Value',
            fieldValueSelectOptionValueDuplicate : 'Duplicate option value : {0}',
            fieldEndiannessDefault : 'Default',
            dataType : {
                byte : 'Byte (uint8)',
                char_int : 'Mini Int (int8)',
                char : 'Char (int8)',
                unsigned_char : 'Unsigned Char (uint8)',
                short : 'Short (int16)',
                unsigned_short : 'Unsigned Short (uint16)',
                int : 'Int (int32)',
                unsigned_int : 'Unsigned Int (uint32)',
                long : 'Long (int32)',
                unsigned_long : 'Unsigned Long (int32)',
                long_long : 'Long Long (int64)',
                unsigned_long_long : 'Unsigned Long Long (uint64)',
                float : 'Float',
                double : 'Double',
                string : 'String',
                bytes : 'Bytes',
                file : 'File',
                bits : 'Bits'
            },
        },
        hex : {
            name : 'HEX',
            editorPlaceholder : 'e.g. AA FF CA 98 FF',
            illegalHexChar : 'Request content contains non-hex characters', 
        },
        text : {
            name : 'Text',
            editorPlaceholder : 'e.g. how are you ?',
            modeText : 'Text Mode',
            modeJson : 'JSON Mode',
            modeXml : 'XML Mode',
        },
        file : {
            name : 'File',
            selectTip : 'Click or drag file to this area',
            fileNotSupported : 'Folder is not supported or file is not available.',
            fileError : 'Failed to process file : {0}',
            filepathCannotBeEmpty : 'Please select a file.',
            filepathUnableToRead : 'Unable to read file {0}',
            readFailed : 'File "{0}" failed to read : {1}',
            select : 'Select File',
            filepath : 'File Path',
            filesize : 'File Size',
            sendMode : 'Send Mode',
            sendModeAll : 'All',
            sendModeLine : 'Line',
            sendModeLineNewLineStyle : 'New Line',
            sendModelLineOutOfContent : 'All content has been sent.',
            sendModeBytes : 'Bytes',
            sendModeBytesByteCount : 'Bytes',
            viewerMode : 'Preview',
            afterSendAll : 'After Send All',
            afterSendAllBackToHead : 'Back to head',
            afterSendAllNoticeEnd : 'Show end notice',
            fileIsParsing : 'File parsing ...',
            unableToLoadBigFile : 'Unable to handle file over {0} for now',
        },
    },
    response : {
        preserveResponseData : 'Preserve Response',
        saveAsFileDataEmpty : 'No response data, unable to create file.',
        saveAsExcelDataEmpty : 'No response data, unable to create excel file.',
        saveAsExcelViewerNotSupport : 'Current response handle does not support excel export.',
        saveAsTestcaseViewerNotSupport : 'Current response handle does not support save as testcase.',
        stream : {
            name : 'Stream',
            filterAll : 'All',
            filterSend : 'Send',
            filterReceive : 'Receive',
        },
        hex : {
            name : 'HEX',
            lineLimit : 'Lines',
            lineSize : 'Columns',
            clear : 'Clear viewer',
            autoScrollToButton : 'Auto scroll to bottom',
            locate : 'Location',
            bytes : 'Bytes',
            offsetNotAvailable : 'Please input available offset',
            formParserTitle : 'Format Parser',
            formParserNoRules : 'No parser rules',
        },
        text : {
            name : 'Text',
        },
        form : {
            name : 'Form',
            fieldName : 'Name',
            fieldType : 'Type',
            fieldValue : 'Value',
            fieldDesc : 'Description',
            fieldOperations : 'Operations',
            dataLengthPlaceholder : 'Length',
            preserveExportRowRowId : 'No.',
            preserveExportRowTime : 'Time',
            parseToLast : 'Parse to end',
            saveAsExcelFieldListEmpty : 'Unable to export excel file because format field list is empty.',
            expression : 'Expression',
            startOffset : 'Start Offset',
        },
        plotter : {
            name : 'Plotter',
            parseScriptModalTitle : 'Parse Script',
            xsize : 'X Size',
            dataPoint : 'Data Point',
            parseTypeCustom : 'Custom Parser',
            btnEditParseScript : 'Edit Parser Script',
            failedToExecuteParseScript : 'Failed to execute parser script : {0}',
            customScriptSnippetChannelCreate : 'Create Channel',
            customScriptSnippetChannelPushData:'Push Data To Channel',
            customScriptSnippetGetDataLength:'Get Data Length',
            customScriptSnippetGetCursor:'Get Cursor',
            customScriptSnippetMoveCursor:'Move Cursor',
            customScriptSnippetSetCursor:'Set Cursor',
            customScriptSnippetReadInt8 : 'Read as 8 bitinteger',
            customScriptSnippetReadUint8 : 'Read as 8 bit unsigned int',
            customScriptSnippetReadInt16BE : 'Read as 16 bitinteger (BE)',
            customScriptSnippetReadUint16BE : 'Read as 16 bit unsigned int (BE)',
            customScriptSnippetReadInt16LE : 'Read as 16 bitinteger (LE)',
            customScriptSnippetReadUint16LE : 'Read as 16 bit unsigned int (LE)',
            customScriptSnippetReadInt32BE : 'Read as 32 bitinteger (BE)',
            customScriptSnippetReadUint32BE : 'Read as 32 bit unsigned int (BE)',
            customScriptSnippetReadInt32LE : 'Read as 32 bitinteger (LE)',
            customScriptSnippetReadUint32LE : 'Read as 32 bit unsigned int (LE)',
            customScriptSnippetReadInt64BE : 'Read as 64 bitinteger (BE)',
            customScriptSnippetReadUint64BE : 'Read as 64 bit unsigned int (BE)',
            customScriptSnippetReadInt64LE : 'Read as 64 bitinteger (LE)',
            customScriptSnippetReadUint64LE : 'Read as 64 bit unsigned int (LE)',
            customScriptSnippetReadFloat32BE : 'Read as 32 bit float (BE)',
            customScriptSnippetReadFloat64BE : 'Read as 64 bit float (BE)',
            customScriptSnippetReadFloat32LE : 'Read as 32 bit float (LE)',
            customScriptSnippetReadFloat64LE : 'Read as 64 bit float (LE)',
            customScriptHelpDoc : 'Help',
            parserDataFrame : 'Data Frame',
            parserDataFrameSettingTitle : 'Data Frame Parser Setting',
            parserDataFrameHeader : 'Header',
            parserDataFrameDataLength : 'Data Length',
            parserDataFrameDataType : 'Data Type',
            parserDataFrameChannelCount : 'Channel Count',
            parserDataFrameTail : 'Tail',
            parserDataFrameDynamicLength : 'Dynamic Length',
            parserDataFrameFixedLength : 'Fixed Length',
            parserDataMatrix : 'Matrix',
            parserDataMartixSettingTitle : 'Matrix Setting',
            parserForm : 'Form Data',
            parserFormSettingTitle : 'Form Data Setting',
            parserFormFields : 'Fields',
            channelTooMany : 'Channel number can not over {0}',
            parserFormFieldEnable : 'Enable',
            parserFormFieldName : 'Attribute',
            parserFormFieldExpression : 'Expression',
            parserFormFieldExpressionFailed : 'Attribute {0} Expression [{1}] failed to execute : {2}',
            parserRegex : 'Regex',
            parserRegexPattern : 'Pattern',
            parserRegexExampleData : 'Test Content',
            parserRegexExampleMatch : 'Matched',
            parserRegexRegexIsNotAvailable : 'Unable to parser regex pattern',
        },
    },
    entry : {
        formFieldName : 'Name',
        refreshSuccess : 'Successfully refreshed',
        folderDeleteConfirm : 'Are you sure you want to delete {0} ?',
        directiveDeleteConfirm : 'Are you sure you want to delete {0} ?',
        directiveCopyName : '{0} Copy',
        editTitle : 'Folder Edit',
        folderSelectTitle : 'Select Folder',
        folderSelectRootName : 'Root',
        folderSelectIsRequired : 'Please selector the folder',
    },
    script : {
        configTitle : 'Script Config',
        requestScript : 'Request Script',
        helpLink : 'Help',
        snippetVariableSet : 'Set Variable Value',
        snippetParametersGet : 'Get Parameters',
        snippetParamFormItemValueGetByName : 'Get form item value by name',
        snippetParamFormItemGetByName : 'Get form item by name',
        snippetParamFormItemValueGetByIndex : 'Get form item value by index',
        snippetParamFormItemGetByIndex : 'Get form item by index',
        snippetTimestamp : 'Get timestamp',
        snippetRandom : 'Generate randome number',
        snippetBytesSum : 'Bytes sum',
        snippetCRC : 'CRC Check',
        snippetStatusSet : 'Set Status Value',
        snippetsStatusGet : 'Get Status Value',
        parameterFormItemsGetByRowNumsNumNotExists : 'Unable to get parameter by row number : {0}',
        parameterFormItemsGetByRowNumsFromNotSet : 'Row number range requires start number by "from"',
        parameterFormItemsGetByRowNumsToNotSet : 'Row number range requires end number by "to"',
    },
    target : {
        send : 'Send',
        autoSend : 'Auto Send',
        autoSendBtnStart : 'Start',
        autoSendBtnStop : 'Stop',
        autoSendIntervalTime : 'Interval',
        autoSendIntervalTimeFixed : 'Fiexed',
        autoSendIntervalMin : 'Min Time',
        autoSendIntervalMax : 'Max Time',
        autoSendExecuteCount : 'Execute Count',
        autoSendExecuteCountAlways : 'Always',
    },
    execute : {
        btnConfig : 'Setting',
        btnScript : 'Script',
        labelNoResponse : 'No Response',
        labelResponseDataLength : 'Data Size',
        labelResponseSaveAsFile : 'Save As File',
        labelResponseSaveAsExcelFile : 'Save As Excel File',
        labelResponseSaveAsExcelFileNotSupport : 'Current response view mode does not support save as excel file.',
        labelResponseSaveAsTestcase : 'Save As Testcase',
        responseNotExists : 'No response available.',
        resposneSaveAsTestcaseSuccess : 'Tesecase saved',
        resposneSaveAsTestcaseNotAvailableOnPreserveMode : 'Save as testcase not available under preserve mode.',
    },
    share : {
        button : 'Share',
        modalTitle : 'Share Directive',
        withResponse : 'With Response Data',
        generateLink : 'Generate Link',
        link : 'Share Link',
        expiredAt : 'Expired At',
        linkCopied : 'Share link copied',
    },
};